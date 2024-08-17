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
        className="pb-16 text-4xl font-thin tracking-wider text-center"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex justify-center mb-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-1/4"
          >
            <a href={project.link}>
              <img
                src={project.image}
                width={250}
                height={250}
                className="mb-2 "
                alt={project.title}
              ></img>
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w3/4"
          >
            <h6 className="mb-2">{project.title}</h6>
            <p className="mb-4 text-sm max-w-xl text-neutral-400">
              {project.description}
            </p>
            {project.technologies.map((tech, index) => (
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

export default Projects;
