import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-[#262626] flex flex-col items-center justify-center text-center"
    >
        <h2 className="text-4xl sm:text-8xl font-bold text-white">
          404
        </h2>
        <p className="text-white py-4 text-xl sm:text-2xl">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-xl group font-medium text-white w-fit px-7 py-4 my-3 flex items-center rounded-md bg-[#9D9D9D] hover:bg-[#9ACD32] cursor-pointer"
        >
          Return to Home
          <span className="group-hover:-rotate-45 duration-300">
            <HiArrowNarrowUp size={25} className="ml-3" />
          </span>
        </button>
      </div>
  );
};

export default NotFound;
