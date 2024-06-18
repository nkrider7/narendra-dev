import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};
const marqueeVariant = {
  animate: {
    x: [-1035,0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="flex">
      <div className="marquee">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className=" font-gil ">
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
        </motion.div>
        
      </div>
      <div className="marquee1">
        {/* 3. Using framer motion */}
        <motion.div
          className="track1"
          variants={marqueeVariant}
          animate="animate"
        >
          <h1 className=" font-gil ">
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Marquee;
