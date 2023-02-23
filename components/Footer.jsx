'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold text-white md:text-6xl text-[44px]"> Enter The Metaverse</h4>
        <button type="button" className="flex items-center h-fit rounded-full gap-3 bg-[#25618b] px-8 py-6 bg">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-base text-white uppercase">Enter Metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 h-[2px] bg-white opacity-10 block" />

        <div className="flex justify-between items-center gap-4 flex-wrap">
          <h5 className="font-extrabold text-2xl text-white">
            Metaversus
          </h5>
          <p className="font-normal text-sm text-white opacity-50"> Copyright © 2022 - 2023 Metaversus. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap">
            {socials.map(social => (
              <a href="">
                <img key={social.name} src={social.url} alt={social.name} className="w-6 h-6 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.footer>
);

export default Footer;
