import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="mt-24 border-b border-neutral-700 pb-24 container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="pb-16 text-4xl font-thin tracking-wider text-center dark:font-extralight"
      >
        Experience
      </motion.h1>
      {EXPERIENCES.map((job) => (
        <div key={job.id} className="flex justify-center mb-8 flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="sm:w-1/4 xxs:w-full"
          >
            <p className="text-sm mb-2 text-white dark:text-black">
              {job.year}
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className=" "
          >
            <h6 className="mb-2 xs:text-xs sm:text-16">
              {job.role} -{" "}
              <span className="sm:text-sm xs:text-xs ">{job.company}</span>
            </h6>
            <p className="mb-4 xs:text-xs sm:text-sm md:w-500 text-neutral-400 sm:max-w-sm xs:max-w-xs">
              {job.description}
            </p>
            {job.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs mr-2 text-purple-500 border p-1 rounded dark:border-black"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
