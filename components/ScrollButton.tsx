import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

type Props = {
  heroSect: React.RefObject<HTMLElement>;
  visible: boolean;
};

const ScrollButton = ({ heroSect, visible }: Props) => {
  const scrollToTop = () => {
    heroSect.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      aria-label='scroll to top'
      className='z-50 fixed left-full md:left-1/2 bottom-0 md:bottom-4 w-16 h-16 -ml-12 md:-ml-6 transition-all hover:text-red-300 text-neutral-300'
      style={{ opacity: visible ? '100' : '0', cursor: visible ? 'pointer' : 'default' }}
    >
      <FaArrowCircleUp className='text-3xl sm:text-4xl md:text-5xl' onClick={scrollToTop} />
    </button>
  );
};

export default ScrollButton;
