"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const OurServicesPage = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  // useEffect(() => {});
  return (
    <>
      <div className="text-7xl flex justify-center items-center min-h-screen">
        Our Services Page
      </div>
      <motion.p
        className={styles.para}
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        We offer a variety of services to help you achieve your digital goals.
        Our team of experts is dedicated to providing top-notch solutions
        tailored to your needs. Whether you're looking for web development,
        digital marketing, or design services, we've got you covered. Our
        approach is client-centric, ensuring that we understand your vision and
        work collaboratively to bring it to life. With a focus on innovation and
        quality, we strive to deliver results that exceed your expectations.
        Partner with us to take your business to the next level with our
        comprehensive range of services.
      </motion.p>
      <div className="text-7xl flex justify-center items-center min-h-screen">
        The end Services Page
      </div>
    </>
  );
};

export default OurServicesPage;
