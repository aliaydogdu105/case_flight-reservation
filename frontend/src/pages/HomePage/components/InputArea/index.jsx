import React, { useState } from "react";
import InputHeader from "./InputHeader";
import LandindAndTime from "./LandindAndTime";

const InputArea = () => {
  const [flightType, setFlightType] = useState("roundTrip"); // "roundTrip" or "oneWay"

  return (
    <div className=" bg-[#EDEDED] h-[235px] px-5 py-6 rounded-3xl">
      <InputHeader flightType={flightType} setFlightType={setFlightType} />
      <LandindAndTime flightType={flightType} />
    </div>
  );
};

export default InputArea;
