import React from "react";

const CardArea = () => {
  const cards = [
    {
      title: "car rentals",
      logo: "asdf",
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9NfO1DWIsK4VLnc_ib-wjU2-lYVr1v8TuvFa2qeZZ8oCqjgYy",
    },
    {
      title: "hotels",
      logo: "asdf",
      bgImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGk5UwXwBIp5APzs6FE5s2jrcNCGvVdoPD4jp8TG4425-jWKPj",
    },
    {
      title: "travel packages",
      logo: "asdf",
      bgImage:
        "https://www.compensa.lt/uploads/_CGSmartImage/keliones-draudimas_900x900_04_9399-554a93d460e38cedc3c3909e358c0856.webp",
    },
  ];

  return (
    <div className="flex flex-col h-fit gap-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="w-[300px] h-[295px] rounded-3xl flex items-center justify-center text-white relative"
          style={{
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" left-5 rounded-xl absolute bottom-5">
            <h2 className="text-2xl font-semibold uppercase">{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArea;
