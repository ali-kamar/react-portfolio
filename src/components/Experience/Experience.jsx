import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Experience = () => {
  return (
    <div className="mt-24">
      <h1 className="pb-16 text-4xl font-thin tracking-wider text-center">
        Experience
      </h1>
      {EXPERIENCES.map((job) => (
        <div key={job.id} className="flex justify-center mb-8">
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="w-1/4"
          >
            <p className="text-sm mb-2 text-white">{job.year}</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="w3/4"
          >
            <h6 className="mb-2">
              {job.role} - <span className="text-sm">{job.company}</span>
            </h6>
            <p className="mb-4 text-sm max-w-xl text-neutral-400">
              {job.description}
            </p>
            {job.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs mr-2 text-purple-500 border p-1 rounded"
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
