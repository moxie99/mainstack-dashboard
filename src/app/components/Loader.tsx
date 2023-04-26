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
        Explore the world while maintaining good health
      </h1>
    </div>
  );
};

export default Loader;
