import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Me.png";
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
        <p className="py-6 my-2 max-w-xl font-light tracking-tighter">
          {HERO_CONTENT}
        </p>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <motion.svg
            className="w-[300px] xl:w-[406px] h-[300px] xl:h-[506px] absolute"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#8b5cf6" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
          <img src={profilePic} alt="Ali Kamar" className="w-96 relative z-10" />
        </div>
      </div>
    </div>
  );
};

export default About;
