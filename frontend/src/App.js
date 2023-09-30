import React from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routing
import PrivateRoute from "./routing/PrivateRoute";

// Import components
import Login from "./Components/Login Page/Login";
import Register from "./Components/Register Page/Register";
import HomePage from "./Components/Home/HomePage";
import MentalCheckIn from "./Components/Activities/mentalcheckin";
import Guide from "./Components/Guides/Guide";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Question from "./Components/Activities/Question";
import Quiz from "./Components/Activities/Quiz";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="max-w-[1080px] mx-auto">
      <Router>
        <Routes>
          <PrivateRoute path="/" component={HomePage} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/checkin" element={<MentalCheckIn />} />
          <Route path="/question" element={<Question />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
