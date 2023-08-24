import React from "react";
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Login from "./Components/Login Page/Login";
import Footer from "./Components/Navbar/Footer";

function App() {
  return (
    <Router>
          <Login />
        <Footer />
    </Router>
  );
}

export default App;
