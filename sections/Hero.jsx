'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* hero heading */}
      <div className="flex justify-center items-center flex-col z-10 relative">
        <motion.h1
          className={styles.heroHeading}
          variants={textVariant(1.1)}>
          Metaverse
        </motion.h1>
        <motion.h2
          variants={textVariant(1.2)}
          className={`${styles.heroHeading} flex justify-center items-center flex-row`}>
          Ma<div className={styles.heroDText} /> ness
        </motion.h2>
      </div>

      {/* hero img & stamp  */}
      <motion.div
        variants={slideIn('right', 'tween', 0.5, 1)}
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img src="/cover.png" alt="cover" className="w-full sm:h-[350px] object-cover rounded-tl-[140px] z-10 relative" />
        <div className="relative w-full -mt-[55px] pr-[40px] sm:-mt-[70px] flex justify-end z-10">
          <a href="#explore">
            <img src="/stamp.png" alt="stamp"
              className="sm:w-[155px] sm:h-[155px] w-[100px] h-[100px] object-contain" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section >
);

export default Hero;
