import React from "react";
import './App.css';

// import routes
import { Routes, Route } from "react-router-dom";

// import components
import Login from "./Components/Login Page/Login";
import Footer from "./Components/Navbar/Footer";

// import pages
import Register from "./Components/Register Page/Register";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
