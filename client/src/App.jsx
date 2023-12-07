import { useState } from "react";
import LandingPage from "./layout/LandingPage";
import SignUp from "./layout/Signup.jsx";
import LoginPage from "./layout/LoginPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="absolute w-full h-full bg-slate-300  flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/MyApp" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
