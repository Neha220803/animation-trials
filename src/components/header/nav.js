import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuSlice, slide } from "../animation/anim";
import Curve from "./curve";

const Nav = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/our-services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <motion.div
      variants={menuSlice}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <p className="text-xl">Navigation</p>
          <hr></hr>
          <br></br>
          {navItems.map((item, index) => {
            return (
              <motion.div
                variants={slide}
                animate="enter"
                exit="exit"
                initial="initial"
                key={index}
                // onMouseEnter={() => {
                //   setSelectedIndicator(item.href);
                // }}
                custom={index}
              >
                <Link href={item.href}>{item.title}</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
