import React, { useState } from "react";

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
    <div className="flex flex-col gap-7 mt-7 bg-blue-100">
      <div className=" flex bg-pink-200">
        <div className=" flex w-1/2">
          {/* Kalkış Noktası */}
          <>
            <select
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="py-[7px] px-8 border rounded-l-full"
            >
              <option value="" disabled>
                Select departure airport
              </option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
          </>

          {/* Varış Noktası */}
          <>
            <select
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="py-[7px] px-8 ml-2 border rounded-r-full"
            >
              <option value="" disabled>
                Select arrival airport
              </option>
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </select>
          </>
        </div>

        <div className="flex flex-row-reverse w-1/2">
          {/* Eğer Round Trip seçildiyse Dönüş Tarihi Göster */}
          {flightType === "roundTrip" && (
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="py-[7px] px-14 ml-2 border rounded-r-full"
            />
          )}

          {/* Gidiş Tarihi */}
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className={`py-[7px] px-14 border rounded-l-full ${
              flightType === "oneWay" && "rounded-r-full"
            }`}
          />
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
