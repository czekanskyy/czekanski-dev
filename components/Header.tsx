import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  sections: {
    hero?: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    skills: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

const Header = (props: Props) => {
  return (
    <header>
      <motion.div
        className='flex items-center absolute top-0 right-0 z-50 p-2 sm:p-4 md:mx-6 gap-x-2 md:gap-x-4 text-neutral-500 font-bold text-xs sm:text-sm md:text-base xl:text-lg'
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
        <a onClick={e => props.sections.about.current?.scrollIntoView({ behavior: 'smooth' })}>
          <span className='transition-all hover:text-neutral-400 cursor-pointer'>ABOUT</span>
        </a>
        <span className='text-red-500/50'>|</span>
        <a onClick={e => props.sections.projects.current?.scrollIntoView({ behavior: 'smooth' })}>
          <span className='transition-all hover:text-neutral-400 cursor-pointer'>PROJECTS</span>
        </a>
        <span className='text-red-500/50'>|</span>
        <a onClick={e => props.sections.skills.current?.scrollIntoView({ behavior: 'smooth' })}>
          <span className='transition-all hover:text-neutral-400 cursor-pointer'>SKILLS</span>
        </a>
        <span className='text-red-500/50'>|</span>
        <a onClick={e => props.sections.contact.current?.scrollIntoView({ behavior: 'smooth' })}>
          <span className='transition-all hover:text-neutral-400 cursor-pointer'>CONTACT</span>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
