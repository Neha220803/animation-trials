import styles from "./style.module.scss";
import { motion } from "framer-motion";

import React from "react";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-75 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: { d: initialPath },
    enter: { d: initialPath, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { d: targetPath, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  return (
    <svg className={styles.svgCurve}>
      <motion.path
        d={initialPath}
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
