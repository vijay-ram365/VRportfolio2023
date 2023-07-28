import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#274c7c]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl mb-2 sm:text-7xl font-bold text-[#ccd6f6]">
          Vijay Ramkissoon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a1aac5]">
          Front End Web Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[#a1aac5]">
          Currently designing and building projects while continuously learning
          new skills.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-2 my-2 flex items-center hover:bg-gray-900 hover:border-gray-900">
              Projects <HiArrowNarrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
