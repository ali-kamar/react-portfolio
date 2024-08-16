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
        <div className="flex gap-4 mb-8">
          <div className="tech">{icons.React}</div>
          <div className="tech">{icons.Express}</div>
          <div className="tech">{icons.Node}</div>
          <div className="tech">{icons.MongoDB}</div>
          <div className="tech">{icons.PostgreSQL}</div>
          <div className="tech">{icons.Tailwind}</div>
        </div>
      </div>
    </div>
  );
}

export default Technologies