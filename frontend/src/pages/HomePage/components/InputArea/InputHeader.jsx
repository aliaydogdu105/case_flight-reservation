import React from "react";
import { IoAirplane } from "react-icons/io5";

const InputHeader = ({ flightType, setFlightType }) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-3">
        <IoAirplane size={22} />
        <h1 className=" font-bold uppercase text-lg">book your flight</h1>
      </div>
      {/* Round Trip ve One Way Seçimi */}
      <div className="flex rounded-3xl overflow-hidden">
        <button
          className={`py-3 px-5 transition-all duration-150 ${
            flightType === "roundTrip"
              ? "bg-[#592759] text-[#D9D2DE] font-semibold"
              : "bg-[#D9D2DE] text-[#592759] hover:font-semibold"
          }`}
          onClick={() => setFlightType("roundTrip")}
        >
          Round Trip
        </button>
        <button
          className={`py-3 px-4 transition-all duration-150 ${
            flightType === "oneWay"
              ? "bg-[#592759] text-[#D9D2DE] font-semibold"
              : "bg-[#D9D2DE] text-[#592759] hover:font-semibold"
          }`}
          onClick={() => setFlightType("oneWay")}
        >
          One Way
        </button>
      </div>
    </div>
  );
};

export default InputHeader;
