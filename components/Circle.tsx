import React from 'react';

type Props = {};

const Circle = (props: Props) => {
  return (
    <div className='absolute flex items-center justify-center'>
      <div className='w-[360px] h-[360px] sm:w-[550px] sm:h-[550px] bg-transparent border border-gray-300/5 absolute rounded-full animate-pulse -z-10' />
      <div className='w-[260px] h-[260px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-red-500 to-purple-500 absolute rounded-full animate-spin duration-2000 -z-10' />
      <div className='w-[256px] h-[256px] sm:w-[446px] sm:h-[446px] bg-neutral-800 absolute rounded-full -z-10' />
      {/* <div className='w-[156px] h-[156px] sm:w-[346px] sm:h-[346px] bg-transparent border border-gray-300/5 absolute rounded-full -z-10' /> */}
      <div className='w-[156px] h-[156px] sm:w-[346px] sm:h-[346px] bg-transparent border border-gray-300/5 absolute rounded-full animate-pulse -z-10' />
    </div>
  );
};

export default Circle;
