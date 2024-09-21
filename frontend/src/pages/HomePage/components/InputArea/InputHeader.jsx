import React from "react";

const InputHeader = ({ flightType, setFlightType }) => {
  return (
    <div className=" bg-green-700 flex justify-between">
      <div className="flex justify-center items-center">
        <h2>Logo</h2>
        <h2 className=" font-semibold uppercase text-xl">book your flight</h2>
      </div>
      {/* Round Trip ve One Way Seçimi */}
      <div className="flex rounded-3xl overflow-hidden">
        <button
          className={`py-3 px-4 transition-all duration-150 ${
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
