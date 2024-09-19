import React from "react";
import Logo from "../../../components/Logo";
import ProfilePhoto from "../../../components/ProfilePhoto";
import NavLinks from "../../../components/NavLinks";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-yellow-200 py-5">
      <Logo />
      <div className=" flex justify-center items-center gap-5">
        <NavLinks />
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default Navbar;
