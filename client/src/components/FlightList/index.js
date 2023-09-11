import React, { useEffect } from "react";
import ListCard from "./ListCard";
import { useSelector } from "react-redux";
import { getFlights } from "../../redux/slices/FlightSlice";
import { useDispatch } from "react-redux";
import { fetchFlights } from "../../redux/services/FlightService";
import Loading from "../Loading";
import NoFlight from "../NoFlight";
import Filter from "./Filter";

const FlightList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  const flights = useSelector(getFlights);

  return (
    <div className="md:pt-32 pt-80">
      <Filter />
      {flights.status === "loading" && <Loading />}
      {!flights.isOneWay && flights.status === "succeeded" && (
        <p className="text-second font-medium">Departure</p>
      )}
      {flights.status === "succeeded" &&
        flights.filteredFlights.map((flight) => (
          <ListCard key={flight.id} flight={flight} />
        ))}
      {flights.filteredFlights.length === 0 &&
        flights.status === "succeeded" && <NoFlight />}
      {!flights.isOneWay && flights.status === "succeeded" && (
        <p className="text-second font-medium mt-5">Return</p>
      )}
      {flights.status === "succeeded" &&
        flights.filteredReturnList.map((flight) => (
          <ListCard key={flight.id} flight={flight} />
        ))}
      {flights.filteredReturnList.length === 0 &&
        flights.status === "succeeded" &&
        !flights.isOneWay && <NoFlight />}
    </div>
  );
};

export default FlightList;
