import React from 'react';

import { motion } from 'framer-motion';
import { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  const sections = ['about', 'projects', 'skills', 'contact'];

  return (
    <motion.nav
      className='flex items-center absolute top-0 right-0 z-50 p-2 sm:p-4 md:mx-6 gap-x-3 md:gap-x-6 text-[#B3B3B3] font-bold text-xs sm:text-sm md:text-base xl:text-lg select-none'
      initial={{
        y: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    >
      {sections.map(sect => (
        <a
          key={sect}
          href={`#${sect}`}
          className='uppercase transition-all hover:text-neutral-200 cursor-pointer'
          onClick={e => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {sect}
        </a>
      ))}
    </motion.nav>
  );
};

export default Header;
