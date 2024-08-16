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
    <div className="container mt-24  flex justify-center border-b border-neutral-700 pb-24">
      <div>
        <h1 className="pb-16 text-4xl font-thin tracking-wider text-center">
          Technologies
        </h1>
        <div className="flex gap-4 mb-8 flex-wrap">
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
        </div>
      </div>
    </div>
  );
}

export default Technologies