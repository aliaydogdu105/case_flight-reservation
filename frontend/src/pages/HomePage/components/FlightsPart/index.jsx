import React from "react";
import FlightsCard from "./FlightsCard";
import FlightsSort from "./FlightsSort";

const FlightsPart = () => {
  return (
    <div className=" flex bg-purple-500">
      <FlightsCard />
      <FlightsSort />
    </div>
  );
};

export default FlightsPart;
