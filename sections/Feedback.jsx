'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: '0.25' }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col justify-end gradient-05 sm:p-8 p-8 rounded-3xl border-[1px] border-[#6a6a6a] relative" >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-4xl text-white">
            Samantha
          </h4>
          <p className="mt-1 font-normal text-white text-md">Founder | Metaversus</p>
        </div>
        <p className="mt-6 font-euduxus font-normal text-white sm:text-2xl text-xs sm:leading-[45px] leading-[39px]">"With the deveolopment of today's technology, metaverse is very useful for toady's work, or can be called web 3.0. by using metaverse you can use it as anything"</p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute top-[3%] left-[-10%]">
          <img src="stamp.png" alt="stamp" className="w-36 h-36 object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;

