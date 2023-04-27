"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PuffLoader size={100} color="green" />
      <h1 className="text-lg font-light text-green-800 shadow-emerald-700">
        Explore your data with ease
      </h1>
    </div>
  );
};

export default Loader;
