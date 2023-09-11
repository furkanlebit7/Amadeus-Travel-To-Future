import React from "react";
import { TbPlaneOff } from "react-icons/tb";
const NoFlight = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <TbPlaneOff className="text-6xl text-second" />
      <h1 className="font-semibold text-3xl text-main">No Flight Found</h1>
    </div>
  );
};

export default NoFlight;
