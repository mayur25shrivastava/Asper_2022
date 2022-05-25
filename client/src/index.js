import React from "react";
import ReactDOM from "react-dom/client";
import "./dist/output.css";
import './assets/stylesheet/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

// Pages
import Landing from "./Pages/Landing";
import Event from "./Pages/Event";
import About from "./Pages/About";

// Blog Pages
import BlogHome from "./Pages/Blogs/Home";
import EventSchedule from "./components/Event/EventSchedule";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Event" element={<EventSchedule />} />
        
        <Route path="/about" element={<About/>} />

        <Route path="/blogs" element={<BlogHome/>} />
        
        {/* <Route path="/event" element={<Event/>} /> */}
        
      </Routes>
    </Router>
  </React.StrictMode>
);