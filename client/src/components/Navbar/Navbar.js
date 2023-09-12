import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme ? "" : "dark");
  };

  return (
    <nav className="bg-main dark:dark:bg-zinc-800 p-4 fixed top-0 left-0 z-10 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl text-second">Amadeus Air Lines</div>
        <p
          className="text-xl text-second cursor-pointer"
          onClick={() => handleTheme()}
        >
          {!theme ? <BsSun /> : <BsMoon className="text-main" />}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
