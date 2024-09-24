import React, { useState } from "react";

const FlightsSort = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [stops, setStops] = useState("");

  const handleChangePrice = (event) => {
    setSortOrder(event.target.value);
  };

  const handleChangeArrival = (event) => {
    setArrivalTime(event.target.value);
  };

  const handleChangeStops = (event) => {
    setStops(event.target.value);
  };

  return (
    <div className="flex flex-col flex-1 pl-9 py-3">
      {/* sort by */}
      <div className=" flex flex-col text-base">
        <label htmlFor="price" className="mb-4 text-lg font-semibold">
          Sort by:
        </label>
        <select
          id="price"
          value={sortOrder}
          onChange={handleChangePrice}
          className="p-2 border rounded-lg"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>
      {/* Arrival Time */}
      <div className=" flex flex-col">
        <label className="my-4 text-lg font-semibold">Arrival Time:</label>
        <div>
          <label>
            <input
              className="mr-2 mb-4"
              type="radio"
              value="5:00 AM - 11:59 AM"
              checked={arrivalTime === "5:00 AM - 11:59 AM"}
              onChange={handleChangeArrival}
            />
            5:00 AM - 11:59 AM
          </label>
          <br />
          <label>
            <input
              className="mr-2"
              type="radio"
              value="12:00 PM - 5:59 PM"
              checked={arrivalTime === "12:00 PM - 5:59 PM"}
              onChange={handleChangeArrival}
            />
            12:00 PM - 5:59 PM
          </label>
        </div>
      </div>
      {/* Stops */}
      <div className=" flex flex-col">
        <label className="my-4 text-lg font-semibold">Stops</label>
        <div>
          <label>
            <input
              className="mr-2"
              type="radio"
              value="Nonstop / 230$"
              checked={stops === "Nonstop / 230$"}
              onChange={handleChangeStops}
            />
            Nonstop / 230$
          </label>
          <br />
          <label>
            <input
              className="mr-2 my-4"
              type="radio"
              value="1 Stop / 230"
              checked={stops === "1 Stop / 230"}
              onChange={handleChangeStops}
            />
            1 Stop / 230
          </label>
          <br />
          <label>
            <input
              className="mr-2"
              type="radio"
              value="2+ Stops / 230$"
              checked={stops === "2+ Stops / 230$"}
              onChange={handleChangeStops}
            />
            2+ Stops / 230$
          </label>
        </div>
      </div>
    </div>
  );
};

export default FlightsSort;
