import React from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";

// import routes
import { Routes, Route } from "react-router-dom";

// import components

// import pages
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
    <>
      <div className="max-w-[1080px] mx-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/checkin" element={<MentalCheckIn />} />
          <Route path="/question" element={<Question />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
