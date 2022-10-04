import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Circle from './Circle';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { PageData, Social } from '../typing';
import { urlFor } from '../sanity';
import Image from 'next/future/image';
import { NextComponentType, NextPageContext } from 'next';

interface Props {
  socials: Social[];
  pageData: PageData;
  contact: React.RefObject<HTMLElement>;
}

const Hero: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  // Typewriter config
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Dominik", '<a-man-who-loves-to-code />', 'andToLearnNewThings()'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <header
      id='hero'
      className='h-screen flex flex-col items-center justify-center text-center relative overflow-hidden z-10 gap-y-8 snap-center'
    >
      <motion.div
        className='flex flex-col w-10 items-center absolute md:fixed left-0 top-0 mx-2 sm:py-2 z-50'
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
        }}
      >
        {/* Links to social media */}
        {props.socials?.map(social => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor='#B3B3B3'
            bgColor='transparent'
            className='rounded-full transition-all hover:bg-neutral-300/5'
            target='_blank'
            rel='noreferrer noopener'
          />
        ))}
        <hr className='w-8 border border-gray-500 my-4 sm:my-8 mx-auto' />
        <SocialIcon
          network='email'
          fgColor='#B3B3B3'
          bgColor='transparent'
          className='cursor-pointer rounded-full transition-all hover:bg-neutral-300/5'
          url='#contact'
          label='contact me'
          onClick={e => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.75, delay: 2 }}
        className='z-50 h-36 w-36 rounded-full overflow-hidden relative'
      >
        <Image
          src={urlFor(props.pageData?.heroImage).url()}
          alt='A picture of me'
          width={144}
          height={144}
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1, delay: 2 }}
        className='text-2xl sm:text-3xl md:text-5xl font-medium select-none z-40 absolute flex flex-col items-center gap-y-48'
      >
        <p className='hidden'>Dominik Czekański</p>
        <p className='uppercase tracking-[0.75em] text-xs sm:text-sm md:text-base text-[#B3B3B3] -mb-20 md:-mb-12'>web developer</p>
        <span className='mt-16'>
          {text}
          <Cursor cursorColor='rgb(239, 68, 68)' />
        </span>
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: [0, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className='absolute'
      >
        <Circle />
      </motion.div>
    </header>
  );
};

export default Hero;
