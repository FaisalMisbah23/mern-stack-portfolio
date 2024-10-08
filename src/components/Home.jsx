import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll";

const Home = ({ content }) => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#262626]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            {content?.fields.landing_caption}
          </h2>
          <p className="text-white py-4 max-w-md text-xl">
            {content?.fields.landing_main_text}
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="text-xl group font-medium text-white w-fit px-7 py-4 my-3 flex items-center rounded-md bg-[#9D9D9D] hover:bg-[#9ACD32] cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className='sm:block hidden'>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;