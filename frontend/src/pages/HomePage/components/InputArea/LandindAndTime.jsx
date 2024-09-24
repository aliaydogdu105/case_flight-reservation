import React, { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";

const LandindAndTime = ({ flightType }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Havalimanı listesi
  const airports = [
    { code: "IST", name: "Istanbul Airport" },
    { code: "LHR", name: "London Heathrow" },
    { code: "JFK", name: "New York JFK" },
    { code: "CDG", name: "Paris Charles de Gaulle" },
    { code: "DXB", name: "Dubai International" },
  ];

  return (
    <div className="flex flex-col gap-7 mt-7">
      <div className=" flex">
        <div className=" flex w-1/2">
          {/* Kalkış Noktası */}
          <div className=" relative">
            <select
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="py-[7px] px-14 border border-gray-400 rounded-l-full bg-[#EDEDED] appearance-none"
            >
              <option value="" disabled></option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <FaPlaneDeparture size={20} color="#4A234A"/>
            </div>
          </div>

          {/* Varış Noktası */}
          <div className=" relative">
            <select
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="py-[7px] px-12 ml-2 border border-gray-400 rounded-r-full bg-[#EDEDED] appearance-none"
            >
              <option value="" disabled></option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <FaPlaneArrival size={20} color="#4A234A"/>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-1/2">
          {/* Eğer Round Trip seçildiyse Dönüş Tarihi Göster */}
          {flightType === "roundTrip" && (
            <div className=" relative group">
              <div className="absolute inset-y-0 left-2 flex items-center mx-2 pointer-events-none group-focus-within:hidden bg-[#EDEDED] border-t border-b border-gray-400 w-3/4">
                <IoMdCalendar size={25} color="#4A234A" />
              </div>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="py-[7px] px-16 ml-2 border border-gray-400 rounded-r-full date-input text-transparent bg-[#EDEDED] focus:text-black"
              />
            </div>
          )}

          {/* Gidiş Tarihi */}
          <div className=" relative group">
            <div className="absolute inset-y-0 left-2 flex items-center mx-2 pointer-events-none group-focus-within:hidden bg-[#EDEDED] border-t border-b border-gray-400 w-3/4">
              <IoMdCalendar size={25} color="#4A234A"/>
            </div>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className={`py-[7px] px-16 border border-gray-400 rounded-l-full text-transparent bg-[#EDEDED] focus:text-black ${
                flightType === "oneWay" && "rounded-r-full"
              }`}
            />
          </div>
        </div>
      </div>

      <button
        className=" w-36 py-2 bg-[#592759] text-[#D9D2DE] rounded-lg hover:scale-105 active:scale-100 transition-all duration-150"
        onClick={() =>
          alert(
            `Flight Type: ${flightType}, Departure: ${departure}, Arrival: ${arrival}, Departure Date: ${departureDate}, ${
              flightType === "roundTrip" ? `Return Date: ${returnDate}` : ""
            }`
          )
        }
      >
        Show flights
      </button>
    </div>
  );
};

export default LandindAndTime;
