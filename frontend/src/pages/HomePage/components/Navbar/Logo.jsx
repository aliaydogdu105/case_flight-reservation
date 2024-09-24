import React from "react";
import { IoAirplane } from "react-icons/io5";

const Logo = () => {
  return (
    <div className=" flex justify-center items-center gap-3 uppercase cursor-pointer">
      <div className=" w-9 h-9 bg-[#592759] rounded-full flex justify-start items-center">
        <IoAirplane size={32} color="#E6E8E6" />
      </div>
      <div className=" text-xl font-bold tracking-wide">Plane Scape</div>
    </div>
  );
};

export default Logo;
