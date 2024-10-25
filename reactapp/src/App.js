// import { createBrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
// import { useState } from "react";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
