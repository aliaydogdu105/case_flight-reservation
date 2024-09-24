import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa";

const CardArea = () => {
  const cards = [
    {
      title: "car rentals",
      logo: <IoCarSportOutline size={30} />,
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9NfO1DWIsK4VLnc_ib-wjU2-lYVr1v8TuvFa2qeZZ8oCqjgYy",
    },
    {
      title: "hotels",
      logo: <LuHotel size={30} />,
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGk5UwXwBIp5APzs6FE5s2jrcNCGvVdoPD4jp8TG4425-jWKPj",
    },
    {
      title: "travel packages",
      logo: <FaUmbrellaBeach size={30} />,
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9NfO1DWIsK4VLnc_ib-wjU2-lYVr1v8TuvFa2qeZZ8oCqjgYy",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-end flex-1 gap-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group w-[310px] h-[295px] rounded-2xl flex text-white relative cursor-pointer"
          style={{
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="left-5 rounded-xl absolute bottom-5">
            <div>{card.logo}</div>
            <h2 className="text-2xl font-semibold uppercase group-hover:bg-black group-hover:bg-opacity-40 group-hover:p-1 rounded-lg transition-colors duration-150">
              {card.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArea;
