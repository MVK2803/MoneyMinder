import { useState } from "react";
import LandingPage from "./layout/LandingPage";
import SignUp from "./layout/Signup.jsx";
import LoginPage from "./layout/LoginPage.jsx";

function App() {
  return (
    <div className="absolute w-full h-full bg-slate-300  flex items-center justify-center">
      <LandingPage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
