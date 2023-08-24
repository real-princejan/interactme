import React from "react";
import './App.css';
import { useEffect } from "react";
import Aos from "aos";

// import routes
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./Components/Header-Footer/Header"
import Footer from "./Components/Header-Footer/Footer";

// import pages
import Login from "./Components/Login Page/Login";
import Register from "./Components/Register Page/Register";
import HomePage from "./Components/Home/HomePage";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <>
    <div className="max-w-[1080px] mx-auto">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>

    </>
  );
}

export default App;
