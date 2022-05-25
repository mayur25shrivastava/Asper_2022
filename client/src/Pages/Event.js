import React from "react";

// components
// import Navbar from "../components/Navbar/Navbar";
import Event1 from "../components/Event/Event";
import EventSchedule from "../components/Event/EventSchedule";
import TeamPage from "../components/Event/TeamPage";
import VenuePart from "../components/Event/VenuePart";



const Event = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="container mx-auto">Event</h1>
      <Event1/>

      <EventSchedule/>

      <VenuePart/>

      <TeamPage/>


    </div>
  );
};

export default Event;
