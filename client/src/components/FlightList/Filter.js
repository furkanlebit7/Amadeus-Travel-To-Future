import React, { useState } from "react";
import Select from "react-select";
import { sortFilteredList } from "../../redux/slices/FlightSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "", label: "Recommended" },
    { value: "departureTime", label: "Departure Time" },
    { value: "arrivalTime", label: "Arrival Time" },
    { value: "price", label: "Price" },
    { value: "flightTime", label: "Flight Time" },
  ];

  const handleSort = (value) => {
    setSelectedOption(value);
    dispatch(sortFilteredList(value));
  };

  return (
    <div className="flex items-center my-5 gap-2 flex-wrap md:flex-nowrap">
      <p className="text-md font-medium text-main">Sort by:</p>
      {options.map((option, index) => (
        <button
          key={index}
          className={`${
            selectedOption == option.value
              ? "border-2 dark:border-second border-main"
              : ""
          } bg-white dark:bg-zinc-700 dark:text-white px-3 p-1 rounded-md`}
          onClick={(e) => handleSort(e.target.value)}
          value={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
