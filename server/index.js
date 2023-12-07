import pg from "pg";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "postgres",
});

db.connect();

app.get("/", function (req, res) {
  console.log("/Server running!");
  res.send("Server Running!");
});

//Endpoint to fetch transactions from the database
app.post("/api/v1/transactions", async (req, res) => {
  try {
    //console.log(req.body.body.userId);
    const result = await db.query(
      "SELECT * FROM transactions WHERE user_id = $1",
      [req.body.body.userId]
    );
    //console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to add a new transaction to the database
app.post("/api/v1/addTransaction", async (req, res) => {
  const { date, time, category, description, amount, type, user_id } =
    req.body.body;
  console.log(req.body.body);
  try {
    const result = await db.query(
      "INSERT INTO transactions (user_id, date, time, category, description, amount, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [user_id, date, time, category, description, amount, type]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//password verification endpoint
app.post("/verify-password", async (req, res) => {
  console.log("endpoint reached");
  const { username, password } = req.body.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({
        status: "success",
        message: "Password verified successfully",
      });
    } else {
      res
        .status(401)
        .json({ status: "error", message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error verifying password:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

//new user creation endpoint
app.post("/add-user", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  console.log(username, firstName, lastName, email, password);
  //Insert into users table
  try {
    await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      password,
    ]);
  } catch (error) {
    console.error("Error adding user to users table:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }

  //Insert into user_details table
  try {
    await db.query(
      "INSERT INTO user_details (username, firstname, lastname, email_id) VALUES ($1, $2, $3, $4)",
      [username, firstName, lastName, email]
    );
    res.json({ status: "success", message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user details to user_details table:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.get("/user-details", async (req, res) => {
  try {
    console.log(req.body);
    const result = await db.query(
      "SELECT * FROM user_details where username='test12'"
    ); // Replace with your table name

    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/delete-user", async (req, res) => {
  try {
    console.log(req.body.body);
    const userIdToDelete = req.body; // Assuming the user ID is sent as the request body

    if (!userIdToDelete) {
      return res
        .status(400)
        .json({ error: "User ID is required in the request body" });
    }
    const result = await db.query("DELETE FROM users WHERE id = $1", [
      userIdToDelete,
    ]);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
