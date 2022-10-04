import React from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import { NextComponentType, NextPageContext } from 'next';
import { Project } from '../typing';

interface Props {
  projects: Project[];
}

const Projects: NextComponentType<NextPageContext, {}, Props> = ({ projects }: Props) => {
  return (
    <section
      id='projects'
      className='h-screen flex flex-col items-center justify-center relative snap-center'
    >
      <h2 className='absolute top-16 text-3xl tracking-[0.3em] text-neutral-500'>PROJECTS</h2>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-neutral-500/25 scrollbar-thumb-red-500/75 snap-x snap-mandatory z-20'>
        {projects?.map(proj => (
          <article
            key={proj?._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-12 p-20 md:p-44 justify-center items-center h-screen'
          >
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={urlFor(proj?.image).url()}
                alt={proj?.title}
                width={640}
                height={480}
              />
            </motion.div>

            <div className='space-y-4 sm:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h3 className='text-xl sm:text-2xl md:text-4xl font-semibold text-center'>{proj?.title}</h3>

              <div className='flex items-center justify-center gap-x-4 relative'>
                {proj?.technologies.map(tech => (
                  <Image
                    key={tech?._id}
                    src={urlFor(tech?.icon).url()}
                    alt={tech?.title}
                    width={32}
                    height={32}
                    className='w-8 h-8'
                  />
                ))}
                <p className='w-2'></p>
                <a
                  href={proj?.gitLink}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FaGithub className='w-6 h-6 cursor-pointer transition-all hover:text-neutral-300' />
                </a>
                {proj?.buildLink ? (
                  <a
                    href={proj?.buildLink}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <FaGlobe className='w-6 h-6 cursor-pointer transition-all hover:text-neutral-300' />
                  </a>
                ) : null}
              </div>
              <p className='text-xs sm:text-base md:text-lg text-center md:text-left text-neutral-100 font-light'>{proj?.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className='w-full absolute top-1/5 sm:top-1/4 md:top-1/3 bg-gradient-to-br from-red-500/10 to-purple-500/10 left-0 h-[500px] -skew-y-12'></div>
    </section>
  );
};

export default Projects;
