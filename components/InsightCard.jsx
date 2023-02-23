'use client';

import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4" >
    <img src={imgUrl} alt={title} className="md:w-[270px] w-full h-[250px] object-cover rounded-3xl" />

    <div className="w-full flex justify-between items-center">
      <div className="md:ml-14 flex-1 flex flex-col max-w-[650px]">
        <h4 className="text-2xl font-normal text-secondary-white lg:text-3xl">{title}</h4>
        <p className="text-base lg:text-xl sm:text-sm font-normal text-secondary-white mt-4">{subtitle}</p>
      </div>
      <div className="lg:flex items-center justify-center hidden w-24 h-24 bg-transparent rounded-full border-[1px] border-white">
        <a href="" className="flex items-center w-full h-full justify-center"><img src="arrow.svg" alt="arrow" className="w-2/5 h-2/5 object-contain " /></a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
