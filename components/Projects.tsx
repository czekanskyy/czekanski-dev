import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typing';
import { urlFor } from '../sanity';
import Image from 'next/future/image';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center relative'>
      <h2 className='absolute top-16 text-3xl tracking-[0.3em] text-neutral-500'>PROJECTS</h2>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-neutral-500/25 scrollbar-thumb-red-500/75 snap-x snap-mandatory z-20'>
        {projects?.map(proj => (
          <article key={proj?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-12 p-20 md:p-44 justify-center items-center h-screen'>
            <motion.div initial={{ opacity: 0, y: -200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Image src={urlFor(proj?.image).url()} alt={proj?.title} width={640} height={480} />
            </motion.div>

            <div className='space-y-4 sm:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h3 className='text-xl sm:text-2xl md:text-4xl font-semibold text-center'>{proj?.title}</h3>

              <p className='flex justify-center gap-x-4'>
                {proj?.technologies.map(tech => (
                  <img key={tech?._id} src={urlFor(tech?.icon).url()} alt={tech?.title} className='h-8' />
                ))}
              </p>

              <p className='text-xs sm:text-base md:text-lg text-center md:text-left text-neutral-100 font-light'>{proj?.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className='w-full absolute top-1/5 sm:top-1/4 md:top-1/3 bg-gradient-to-br from-red-500/10 to-purple-500/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
};

export default Projects;
