import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <VscLoading className="animate-spin text-4xl text-second" />
    </div>
  );
};

export default Loading;
