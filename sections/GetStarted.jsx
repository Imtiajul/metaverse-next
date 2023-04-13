/* eslint-disable quotes */

'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

import { TypingText, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (

  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: '0.25' }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img src="/get-started.png" alt="Get Started" className="h-[90%] w-[90%] object-contain" />

      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| How Metaverse Works" />
        <TitleText title={<>Get Started with just a few clicks</>} />
        <ul className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <li key={feature}>
              <StartSteps
                number={index + 1}
                text={feature}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
