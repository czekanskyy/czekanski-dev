import React from 'react';
import SkillItem from './SkillItem';

import type { NextComponentType, NextPageContext } from 'next';
import { Skill } from '../typing';

interface Props {
  skills: Skill[];
}

const Skills: NextComponentType<NextPageContext, {}, Props> = ({ skills }: Props) => {
  return (
    <section
      id='skills'
      className='h-screen flex flex-col items-center justify-center relative snap-center w-screen overflow-x-hidden'
    >
      <h2 className='absolute top-16 text-3xl tracking-[0.3em] text-neutral-500'>SKILLS</h2>
      <div className='grid grid-cols-4 gap-2 sm:gap-4 relative place-items-center'>
        {skills?.map((skill, id) => (
          <SkillItem
            key={skill?._id}
            skill={skill}
            fromLeft={id % 4 === 0 || id % 4 === 1}
            delay={id > 3 ? (id > 7 ? 0.75 : 0.5) : 0.25}
          />
        ))}

        <p className='text-xs sm:text-sm md:text-base absolute -bottom-12 md:-bottom-16 uppercase tracking-widest text-neutral-600 text-center'>
          Hover over a skill to see my progression
        </p>
      </div>
    </section>
  );
};

export default Skills;
