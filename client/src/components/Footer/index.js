import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-zinc-700 mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <FaPlaneDeparture className="text-3xl text-second mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Amadeus
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">About</p>
            </li>
            <li>
              <p className="mr-4 hover:underline md:mr-6">Privacy Policy</p>
            </li>
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">Licensing</p>
            </li>
            <li>
              <p className="hover:underline">Contact</p>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
