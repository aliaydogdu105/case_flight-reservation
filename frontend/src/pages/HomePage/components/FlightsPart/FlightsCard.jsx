import React from "react";
import { LuPlaneLanding, LuPlaneTakeoff } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";

const FlightsCard = () => {
  return (
    <div className=" w-[74%] ">
      <div className="bg-[#EDEDED] rounded-xl rounded-bl-none">
        <h3 className=" p-5 font-bold text-lg">Milano - Madrid</h3>
        <div className=" flex items-center pb-5">
          <div className=" pl-7 pr-20 py-2">
            <div className=" flex items-center gap-2">
              <LuPlaneTakeoff />
              <h4>Departure</h4>
            </div>
            <div className=" font-bold">7:30 AM</div>
            <div>Airport: MXP</div>
          </div>
          <div className=" border border-[#A2A2A2] h-[1px] flex-1"></div>
          <div className=" px-[70px] py-2 text-center flex flex-col items-center gap-1">
            <h4>Alitalia</h4>
            <FaPlane size={20} color="#542654" />
            <div>2h 25m (Nonstop)</div>
          </div>
          <div className=" border border-[#A2A2A2] h-[1px] flex-1"></div>
          <div className=" pr-5 pl-20 py-2">
            <div className=" flex items-center gap-2">
              <LuPlaneLanding />
              <h4>Arrival</h4>
            </div>
            <div className=" font-bold">9:55 AM</div>
            <div>Airport: MAD</div>
          </div>
        </div>
        <div className=" flex justify-between ">
          <div className=" px-7 pb-6 inline-block">
            <div className=" font-bold text-[#542654] text-xl">Price: $200</div>
            <div>Round Trip</div>
          </div>
          <button className="bg-[#592759] text-[#D9D2DE] px-11 rounded-tl-lg rounded-br-xl text-lg font-semibold ">
            Book Flight
          </button>
        </div>
      </div>

      <button className=" px-5 py-4 bg-[#D9D2DE] text-[#602E68] rounded-b-xl underline">
        Check the details
      </button>
    </div>
  );
};

export default FlightsCard;
