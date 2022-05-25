import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <h1 className="container mx-auto">Landing</h1>
      <Link to="/Event">Event Page</Link>
      
    </div>
  );
};

export default Landing;
