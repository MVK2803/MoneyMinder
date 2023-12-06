import pg from 'pg';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = new pg.Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'root',
  database: 'moneyminder'
});

db.connect();

app.get('/', function (req, res) {
  console.log("/Server running!");
  res.send('Server Running!');
});

// Endpoint to fetch transactions from the database
app.use("/api/v1/transactions", async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM transactions where user_id = 1');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to add a new transaction to the database
app.post("/api/v1/addTransaction", async (req, res) => {
  const { date, time, category, description, amount, type, user_id } = req.body.body;
  console.log(req.body.body);
  try {
    const result = await db.query(
      'INSERT INTO transactions (user_id, date, time, category, description, amount, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [user_id, date, time, category, description, amount, type]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
