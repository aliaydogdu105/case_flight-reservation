import React from "react";
import Logo from "./Logo";
import ProfilePhoto from "./ProfilePhoto";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-7">
      <Logo />
      <div className=" flex justify-center items-center gap-8">
        <NavLinks />
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default Navbar;
