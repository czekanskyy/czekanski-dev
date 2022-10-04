import React from 'react';
import { motion } from 'framer-motion';
import { PageData } from '../typing';
import { urlFor } from '../sanity';
import { isMobile } from 'react-device-detect';
import Image from 'next/future/image';
import { NextComponentType, NextPageContext } from 'next';

interface Props {
  pageData: PageData;
}

const About: NextComponentType<NextPageContext, {}, Props> = ({ pageData }: Props) => {
  return (
    <main
      id='about'
      className='h-screen flex flex-col md:flex-row items-center justify-evenly text-center md:text-left md:max-w-7xl w-full mx-auto px-10 relative snap-center'
    >
      <h2 className='absolute top-16 text-3xl tracking-[0.3em] text-neutral-500'>ABOUT</h2>
      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? 0 : -200,
          y: isMobile ? -100 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: isMobile ? 0.5 : 0,
        }}
        className='-mb-28 sm:-mb-48 md:mb-0 flex-shrink-0 w-36 h-36 sm:w-56 sm:h-56 rounded-full relative overflow-hidden object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      >
        <Image
          src={urlFor(pageData?.profilePic).url()}
          alt='A picture of me on a motorcycle'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
        />
      </motion.div>
      <article className='space-y-4 sm:space-y-10 px-0 md:px-10'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
          A <span className='underline decoration-red-500/50 underline-offset-2'>few</span> words about me
        </h3>
        <p className='text-xs sm:text-sm md:text-base'>{pageData?.aboutMe}</p>
      </article>
    </main>
  );
};

export default About;
