import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Me.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const About = () => {
  return (
    <div className="container flex justify-around ">
      <div className="Left flex flex-col">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-wider"
        >
          Ali Kamar
        </motion.h2>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-purple-500 via-slate-500 to-white 
         text-transparent text-4xl tracking-tight bg-clip-text"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="py-6 my-2 max-w-xl font-light tracking-tighter"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <motion.svg
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
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
          <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            src={profilePic}
            alt="Ali Kamar"
            className="w-96 relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
