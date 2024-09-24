import React, { useState, useEffect } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import axios from "axios";

const LandindAndTime = ({ flightType }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [airports, setAirports] = useState([]); // State for airport data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch airport data from the API
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get("http://localhost:3000/destinations");
        setAirports(response.data.destinations); // Set the data to the state
      } catch (error) {
        setError("Failed to fetch airport data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  if (loading) return <div>Loading airports...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-7 mt-7">
      <div className="flex">
        <div className="flex w-1/2">
          {/* Kalkış Noktası */}
          <div className="relative">
            <select
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="py-[7px] px-14 border border-gray-400 rounded-l-full bg-[#EDEDED] appearance-none"
            >
              <option value="" disabled>
                Select departure
              </option>
              {airports.map((airport) => (
                <option key={airport.iata} value={airport.iata}>
                  {airport.publicName.english}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <FaPlaneDeparture size={20} color="#4A234A" />
            </div>
          </div>

          {/* Varış Noktası */}
          <div className="relative">
            <select
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="py-[7px] px-12 ml-2 border border-gray-400 rounded-r-full bg-[#EDEDED] appearance-none"
            >
              <option value="" disabled>
                Select arrival
              </option>
              {airports.map((airport) => (
                <option key={airport.iata} value={airport.iata}>
                  {airport.publicName.english}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <FaPlaneArrival size={20} color="#4A234A" />
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-1/2">
          {flightType === "roundTrip" && (
            <div className="relative group">
              <div className="absolute inset-y-0 left-2 flex items-center mx-2 pointer-events-none group-focus-within:hidden">
                <IoMdCalendar size={25} color="#4A234A" />
              </div>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="py-[7px] px-16 ml-2 border border-gray-400 rounded-r-full date-input bg-[#EDEDED] text-black"
              />
            </div>
          )}

          <div className="relative group">
            <div className="absolute inset-y-0 left-2 flex items-center mx-2 pointer-events-none group-focus-within:hidden">
              <IoMdCalendar size={25} color="#4A234A" />
            </div>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className={`py-[7px] px-16 border border-gray-400 rounded-l-full bg-[#EDEDED] text-black ${
                flightType === "oneWay" && "rounded-r-full"
              }`}
            />
          </div>
        </div>
      </div>

      <button
        className="w-36 py-2 bg-[#592759] text-[#D9D2DE] rounded-lg hover:scale-105 active:scale-100 transition-all duration-150"
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
