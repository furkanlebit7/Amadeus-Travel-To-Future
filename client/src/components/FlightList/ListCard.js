import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CgAirplane } from "react-icons/cg";
import moment from "moment";

const ListCard = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto mt-2">
      <div className="rounded-md shadow-md w-full">
        <button
          className="w-full px-4 py-6 flex items-center bg-white dark:bg-zinc-700 rounded-t-md text-black dark:text-white font-medium"
          onClick={toggleAccordion}
        >
          <span className="text-main dark:text-second">
            {flight.flightCode}
          </span>
          <div className="flex items-center justify-center md:gap-4 flex-1 flex-col md:flex-row">
            <p className="flex flex-col items-center">
              <span className="text-sm md:text-md">
                {flight.departureAirport.name}
              </span>
              <span className="text-xs">
                {moment(flight.departureDate).format("lll")}
              </span>
            </p>
            ----
            <CgAirplane className="text-second text-2xl dark:text-blue-300" />
            ----
            <p className="flex flex-col items-center">
              <span className="text-sm md:text-md">
                {flight.arrivalAirport.name}
              </span>
              <span className="text-xs">
                {moment(flight.arrivalDate).format("lll")}
              </span>
            </p>
          </div>

          <span className="mr-10 text-main  dark:text-second">
            {flight.price}€
          </span>
          <BsChevronDown
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {isOpen && (
          <div className="px-4 py-6 w-full bg-white dark:bg-zinc-700 transition-all flex items-center justify-between flex-col md:flex-row">
            <p className="text-main font-medium">
              Flight Time :{" "}
              <span className="font-normal text-second">
                {Math.floor(flight.flightTime / 60)}h {flight.flightTime % 60}
                min
              </span>
            </p>
            <div className="flex items-center justify-end mr-10 flex-1 gap-1 font-medium text-gray-500 dark:text-white flex-col md:flex-row">
              <p>
                <span className="text-sm md:text-md">
                  {flight.departureAirport.country} /
                </span>
                <span className="text-sm md:text-md">
                  {" "}
                  {flight.departureAirport.city}
                </span>
              </p>
              <CgAirplane className="text-main text-lg mx-3 dark:text-blue-300" />
              <p>
                <span className="text-sm md:text-md">
                  {flight.arrivalAirport.country} /
                </span>
                <span className="text-sm md:text-md">
                  {" "}
                  {flight.arrivalAirport.city}
                </span>
              </p>
            </div>
            <BsChevronDown
              className={`w-6 h-6 transition-transform transform opacity-0 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
