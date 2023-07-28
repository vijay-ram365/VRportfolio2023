import React from "react";

import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import ReactLogo from "../Assets/react.png";
import TailWindLogo from "../Assets/tailwind.png";
import GitHubLogo from "../Assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#274c7c] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold text-[#a1aac5] border-b-4 border-blue-600 inline">
            Skills
          </p>
          <p className="text-[#a1aac5] text-xl py-4">
            Technologies I have worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="HTML Icon" />
            <p className="text-[#a1aac5] py-3">HTML</p>
          </div>
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="CSS Icon" />
            <p className="text-[#a1aac5] py-3">CSS</p>
          </div>
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="text-[#a1aac5] py-3">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={ReactLogo}
              alt="React Icon"
            />
            <p className="text-[#a1aac5] py-3">React</p>
          </div>
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={TailWindLogo}
              alt="TailWind Icon"
            />
            <p className="text-[#a1aac5] py-3">TailWind</p>
          </div>
          <div className="shadow-md shadow-[#1c3248] bg-slate-800 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={GitHubLogo}
              alt="GitHub Icon"
            />
            <p className="text-[#a1aac5] py-3">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
