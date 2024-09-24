import React from "react";
import Navbar from "./components/Navbar";
import InputArea from "./components/InputArea";
import CardArea from "./components/CardArea/CardArea";
import FlightsPart from "./components/FlightsPart";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" flex gap-9">
        <div className=" flex flex-col w-full gap-9">
          <InputArea />
          <FlightsPart />
        </div>
        <CardArea />
      </div>
    </div>
  );
};

export default HomePage;
