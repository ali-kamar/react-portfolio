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
    <div className="container border-b border-neutral-700 pb-24 gap-7 flex justify-around flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="flex flex-col xxs:items-center md:items-start">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 lg:text-6xl font-thin tracking-wider  xxs:text-4xl"
        >
          Ali Kamar
        </motion.h2>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-purple-500 via-slate-500 to-white dark:to-black dark:from-purple-800
         text-transparent lg:text-4xl xxs:text-3xl tracking-tight bg-clip-text"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-justify py-6 my-2 lg:max-w-xl font-light tracking-tighter md:max-w-sm sm:w-500 xxs:w-300 "
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
            className="w-[270px] overflow-hidden lg:h-[506px] lg:w-[406px] xl:w-[406px] h-[300px] xl:h-[506px] absolute -z-10 md:mt-6 lg:mt-0 "
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
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Ali Kamar"
            className="lg:size-96 relative z-10 md:w-60 md:h-64 md:mt-6 lg:mt-0 xxs:w-60 xxs:h-64  "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
