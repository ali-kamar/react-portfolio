import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mt-24 border-b border-neutral-700 pb-24 container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="pb-16 text-4xl font-thin tracking-wider text-center dark:font-extralight"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex justify-center mb-8 gap-8 sm:text-start  sm:flex-row xs:flex-col xxs:flex-col">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="sm:w-1/4 xxs:w-full "
          >
            <a href={project.link} className="flex justify-center sm:block">
              <img
                src={project.image}
                className="mb-2 hover:scale-125 transition xxs:w-300 xxs:h-113 sm:w-250 sm:h-250"
                alt={project.title}
              ></img>
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w3/4 xs:mx-auto sm:mx-0 "
          >
            <h6 className="mb-2">{project.title}</h6>
            <p className="mb-4 text-sm md:max-w-l lg:max-w-xl sm:max-w-xs xs:max-w-xs text-neutral-400">
              {project.description}
            </p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs mr-2 text-purple-500 border dark:border-black p-1 rounded"
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

export default Projects;
