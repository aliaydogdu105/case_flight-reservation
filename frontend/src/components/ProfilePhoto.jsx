import React from "react";

const ProfilePhoto = () => {
  return (
    <div className=" flex justify-center items-center gap-2">
      <img
        src="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg"
        alt="profile photo"
        className=" w-12 h-12 rounded-full"
      />
      <div>Joane Smith</div>
    </div>
  );
};

export default ProfilePhoto;
