'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

import { TypingText, TitleText, NewFeatures } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: '0.25' }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <ul className="mt-[48px] flex flex-wrap gap-[24px]">
          {newFeatures.map((feature) => (
            <li key={feature.title}>
              <NewFeatures {...feature} />
            </li>
          ))}

        </ul>
      </motion.div>

      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img src="/Whats-New.png" alt="What's New" className="h-[90%] w-[90%] object-contain" />

      </motion.div>

    </motion.div>

  </section>
);

export default WhatsNew;
