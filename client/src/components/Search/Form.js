import React, { useEffect, useState } from "react";

import Select from "react-select";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAirports } from "../../redux/slices/AirportSlice";
import { getFlights, setFilteredFlights } from "../../redux/slices/FlightSlice";
import { setFilteredReturnList } from "../../redux/slices/FlightSlice";
import { toast } from "react-toastify";

const Form = ({ isOneWay }) => {
  const dispatch = useDispatch();

  const departureDateError = () =>
    toast("Departrue date cannot be after return date");
  const sameAirportError = () =>
    toast("Departure and arrival airport cannot be the same");

  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const airports = useSelector(getAirports);
  const flights = useSelector(getFlights);

  const options = airports.data.map((air) => ({
    value: air.name,
    label: air.name,
  }));

  const checkDepartureDate = (flight) => {
    if (departureDate === "") {
      return true;
    } else {
      const date1 = moment(departureDate).format("YYYY-MM-DD");
      const date2 = moment(flight.departureDate).format("YYYY-MM-DD");
      return moment(date1).isSame(date2, "day");
    }
  };
  const checkReturnDate = (flight) => {
    if (returnDate === "") {
      return true;
    } else {
      const date1 = moment(returnDate).format("YYYY-MM-DD");
      const date2 = moment(flight.departureDate).format("YYYY-MM-DD");
      return moment(date1).isSame(date2, "day");
    }
  };
  const checkDepartureAirport = (flight) => {
    return (
      !departureAirport || flight.departureAirport.name === departureAirport
    );
  };
  const checkArrivalAirport = (flight) => {
    return !arrivalAirport || flight.arrivalAirport.name === arrivalAirport;
  };

  const filterAirports = () => {
    if (moment(departureDate).isAfter(returnDate)) {
      departureDateError();
      return;
    }
    if (departureAirport === arrivalAirport && departureAirport !== "") {
      sameAirportError();
      return;
    }

    const filteredList = flights.data.filter(
      (flight) =>
        checkDepartureAirport(flight) &&
        checkArrivalAirport(flight) &&
        checkDepartureDate(flight)
    );
    console.log(filteredList);
    dispatch(setFilteredFlights(filteredList));
  };

  const filterReturnList = (flight) => {
    if (!isOneWay) {
      const filteredList = flights.data.filter((flight) => {
        return (
          flight.departureAirport.name === arrivalAirport &&
          flight.arrivalAirport.name === departureAirport &&
          checkReturnDate(flight)
        );
      });
      dispatch(setFilteredReturnList(filteredList));
    }
  };

  useEffect(() => {
    filterAirports();
    filterReturnList();
  }, [arrivalAirport, departureAirport, departureDate, isOneWay, returnDate]);

  return (
    <div className="w-full p-6 flex items-center gap-5 h-full flex-col md:flex-row">
      <div className="w-full">
        <label
          className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
          htmlFor="depatrueAirpot"
        >
          Departure Airport
        </label>
        <Select
          className="dark:text-black"
          options={options}
          onChange={(e) => setDepartureAirport(e.value)}
        />
      </div>
      <div className="w-full">
        <label
          className="block text-gray-700  dark:text-white text-sm font-bold mb-2"
          htmlFor="arrivalAirport"
        >
          Arrival Airport
        </label>
        <Select
          className="dark:text-black"
          options={options}
          onChange={(e) => setArrivalAirport(e.value)}
        />
      </div>
      <div className="w-full">
        <label
          className="block text-gray-700   dark:text-white text-sm font-bold mb-2"
          htmlFor="departureDate"
        >
          Departure Date
        </label>
        <input
          className="shadow focus:ring-blue-500 focus:ring-2 appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          id="departureDate"
          min={moment().format("YYYY-MM-DD")}
          type="date"
          value={departureDate}
          onChange={(e) => {
            setDepartureDate(e.target.value);
          }}
        />
      </div>
      {!isOneWay && (
        <div className="w-full">
          <label
            className="block text-gray-700  dark:text-white text-sm font-bold mb-2"
            htmlFor="returnDate"
          >
            Return Date
          </label>
          <input
            className="shadow focus:ring-blue-500 focus:ring-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="returnDate"
            value={returnDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
            }}
            min={moment().format("YYYY-MM-DD")}
            type="date"
          />
        </div>
      )}
    </div>
  );
};

export default Form;
