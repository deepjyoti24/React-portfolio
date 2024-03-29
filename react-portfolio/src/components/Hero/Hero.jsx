// import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Deepjyoti</h1>
        <p className={styles.description}>
          I am a full-stack developer(MERN) with experience using React, NextJS
          NodeJS, NestJs and MongoDB. Reach out if you would like to learn more!
        </p>
        <a href="mailto:kdeepjyoti311@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myimg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> 
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;