import React from 'react'
import { motion } from "framer-motion";
import { icons } from '../../constants/technologies';
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="container mt-24 flex justify-center border-b border-neutral-700 pb-24">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="pb-16 text-4xl font-thin tracking-wider text-center dark:font-extralight"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex gap-4 mb-8 flex-wrap justify-center"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.React}
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.Express}
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.Node}
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.MongoDB}
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.PostgreSQL}
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="tech"
          >
            {icons.Tailwind}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies