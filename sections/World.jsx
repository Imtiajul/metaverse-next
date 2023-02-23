'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

import { TypingText, TitleText } from "../components";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: '0.25' }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyle="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>}
        textStyle="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png"
          alt="map"
          className="w-full h-full object-cover" />

        <div className="absolute bottom-7 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-1 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="People 02" className="w-full h-full" />
        </div>
        <div className="absolute top-[40%] left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="People 03" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-20">
          <img src="map-world-2.svg" alt="World 1" className="w-full h-full shadow-[0_0_5px_5px_#d65e5e99] rounded-3xl" />
          <h4 className="translate-y-[-130%] text-center text-white font-bold">The Upside Down</h4>
        </div>
        <div className="absolute top-20 right-20 ">
          <img src="map-world-1.svg" alt="World 2" className="rounded-3xl shadow-[0_0_5px_5px_#05766c99]" />
          <h4 className="translate-y-[-130%] text-center text-white font-bold">Hawkins Labs</h4>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
