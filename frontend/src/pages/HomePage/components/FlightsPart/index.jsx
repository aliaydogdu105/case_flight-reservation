import React from "react";
import FlightsCard from "./FlightsCard";
import FlightsSort from "./FlightsSort";

const FlightsPart = () => {
  return (
    <div className=" flex">
      <FlightsCard />
      <FlightsSort />
    </div>
  );
};

export default FlightsPart;
