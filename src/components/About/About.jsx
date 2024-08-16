import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Me.png"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container flex justify-between ">
      <div className="Left flex flex-col">
        <h2 className="pb-16 text-6xl font-thin tracking-wider">Ali Kamar</h2>
        <span
          className="bg-gradient-to-r from-purple-500 via-slate-500 to-white 
         text-transparent text-4xl tracking-tight bg-clip-text"
        >
          Full Stack Developer
        </span>
        <p className="py-6 my-2  max-w-xl font-light tracking-tighter">{HERO_CONTENT}</p>
      </div>
      <div className="">
        <div className="flex justify-center">
          <img src={profilePic} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default About;
export default About;
