import React from "react";
import Navbar from "./components/Navbar";
import InputArea from "./components/InputArea";
import CardArea from "./components/CardArea";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" flex gap-10">
        <InputArea />
        <CardArea />
      </div>
    </div>
  );
};

export default HomePage;
