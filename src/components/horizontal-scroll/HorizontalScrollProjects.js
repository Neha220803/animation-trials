"use client";

import React, { useRef } from "react";
import "./HorizontalScrollProjects.css";
import ImageContainer from "../scroll-image-container/ImageContainer";
import { useScroll, useTransform, motion } from "framer-motion";
const one = "/images/horizontal-scroll/1.png";
const two = "/images/horizontal-scroll/2.png";
const three = "/images/horizontal-scroll/3.png";
const four = "/images/horizontal-scroll/4.png";

const HorizontalScrollProjectComp = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  return (
    <div className="carousel bg-neutral-700" ref={targetRef}>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          <div className="imageItem">
            <ImageContainer imageSource={one} description="first image" />
          </div>
          <div className="imageItem">
            <ImageContainer imageSource={two} description="two image" />
          </div>
          <div className="imageItem">
            <ImageContainer imageSource={three} description="three image" />
          </div>
          <div className="imageItem">
            <ImageContainer imageSource={four} description="four image" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollProjectComp;
