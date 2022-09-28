import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typing';
import { urlFor } from '../sanity';
import { isMobile } from 'react-device-detect';

type Props = {
  fromLeft: boolean;
  delay: number;
  skill: Skill;
};

const SkillItem = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? (props.fromLeft ? -20 : 20) : props.fromLeft ? -200 : 200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: props.delay ?? 0,
        duration: 1,
      }}
      className='w-20 h-20 sm:w-28 sm:h-28 xl:w-36 xl:h-36 border-2 border-neutral-500 flex items-center justify-center rounded-full p-2 sm:p-3 object-cover group overflow-hidden relative'
    >
      <motion.img
        src={urlFor(props.skill?.icon).url()}
        alt={props.skill?.title}
        className='filter group-hover:grayscale group-hover:blur-[2px] transition-all duration-300'
      />
      <div className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/30 w-24 h-24 sm:w-32 sm:h-32 xl:w-36 xl:h-36 flex items-center justify-center text-neutral-800 text-xl sm:text-3xl font-bold cursor-default'>
        <p className='select-none'>{props.skill?.progress}%</p>
      </div>
    </motion.div>
  );
};

export default SkillItem;
