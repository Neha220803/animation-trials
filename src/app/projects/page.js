"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
const Picture1 = "/images/zoom-paralax/1.png";
const Picture2 = "/images/zoom-paralax/2.png";
const Picture3 = "/images/zoom-paralax/3.png";
const Picture4 = "/images/zoom-paralax/4.png";
const Picture5 = "/images/zoom-paralax/5.png";
const Picture6 = "/images/zoom-paralax/6.png";
const Picture7 = "/images/zoom-paralax/7.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Lenis from "lenis";
import TextParalaxComp from "@/components/text-paralax";
import TimelineStickyComp from "@/components/sticky-comps/TimelineSticky";
import HorizontalScrollProjectComp from "@/components/horizontal-scroll/HorizontalScrollProjects";

const ProejctsPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <>
      <div className="h-screen flex items-center justify-center text-6xl">
        Projects Page
      </div>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="h-screen flex items-center justify-center text-6xl">
        Next Section is text paralax
      </div>
      <TextParalaxComp />
      {/* <TimelineStickyComp /> */}
      <HorizontalScrollProjectComp />
      <div className="h-screen text-7xl flex justify-center items-center">
        Horizontal Scroll Over
      </div>
    </>
  );
};

export default ProejctsPage;
