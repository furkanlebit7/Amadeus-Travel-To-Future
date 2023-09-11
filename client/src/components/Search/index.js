import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { fetchAirports } from "../../redux/services/AirportService";
import { setOneWay } from "../../redux/slices/FlightSlice";

const Search = () => {
  const [isOneWay, setIsOneWay] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAirports());
  }, []);
  const handleOneWay = (boo) => {
    setIsOneWay(boo);
    dispatch(setOneWay(boo));
  };

  return (
    <div className="w-full absolute -top-20 left-1/2 -translate-x-1/2">
      <button
        className={`${
          !isOneWay
            ? "bg-gray-300 dark:bg-zinc-500"
            : "bg-white dark:bg-zinc-700 "
        } px-5 p-2 rounded-t-md dark:text-white`}
        onClick={() => handleOneWay(true)}
      >
        One Way
      </button>
      <button
        className={`${
          isOneWay
            ? "bg-gray-300 dark:bg-zinc-500"
            : "bg-white dark:bg-zinc-700"
        } px-5 p-2 ml-2 rounded-t-md dark:text-white`}
        onClick={() => handleOneWay(false)}
      >
        Round Trip
      </button>
      <div className="w-full h-auto md:h-[160px] bg-white dark:bg-zinc-700 dark:text-white shadow-md rounded-b-md">
        <Form isOneWay={isOneWay} />
      </div>
    </div>
  );
};

export default Search;
