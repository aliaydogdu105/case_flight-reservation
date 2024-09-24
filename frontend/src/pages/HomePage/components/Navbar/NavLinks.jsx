import React from "react";
import { FaTag } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const NavLinks = () => {
  return (
    <div className=" flex gap-7 text-lg">
      <div className=" flex items-center gap-1 hover:scale-105 cursor-pointer">
        <FaTag />
        <div>Deals</div>
      </div>
      <div className=" flex items-center gap-1 hover:scale-105 cursor-pointer">
        <BiWorld />
        <div>Discover</div>
      </div>
    </div>
  );
};

export default NavLinks;
