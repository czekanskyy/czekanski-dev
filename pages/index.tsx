import type { GetStaticProps } from 'next';
import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { PageData, Project, Skill, Social } from '../typing';
import { fetchPageData } from '../utils/fetchPageData';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import ScrollButton from '../components/ScrollButton';

type Props = {
  pageData: PageData;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageData, projects, skills, socials }: Props) => {
  const [scrollVisible, setScrollVisible] = useState(false);

  const sections = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  const scrollButton = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const pageHeight = e.currentTarget.clientHeight;
    const posY = e.currentTarget.scrollTop;
    if (posY >= pageHeight) setScrollVisible(true);
    else if (posY < pageHeight) setScrollVisible(false);
  };

  return (
    <div
      onScroll={handleScroll}
      className='text-white bg-neutral-800 snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen scrollbar-thin scrollbar-track-neutral-500/25 scrollbar-thumb-red-500/75'
    >
      <Head>
        <title>Dominik Czekański</title>
        <meta name='description' content='Hi, my name is Dominik, and I am a web developer from Poland.' />
        <link rel='shortcut icon' href='/favicon.webp' type='image/webp' />
      </Head>

      <Header sections={sections} />

      <section ref={sections.hero} id='hero' className='snap-center'>
        <Hero socials={socials} pageData={pageData} contact={sections.contact} />
      </section>

      <section ref={sections.about} id='about' className='snap-center'>
        <About pageData={pageData} />
      </section>

      <section ref={sections.projects} id='projects' className='snap-center'>
        <Projects projects={projects} />
      </section>

      <section ref={sections.skills} id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section ref={sections.contact} id='contact' className='snap-center'>
        <Contact pageData={pageData} />
      </section>

      <div ref={scrollButton}>
        <ScrollButton heroSect={sections.hero} visible={scrollVisible} />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageData: PageData = await fetchPageData();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageData,
      projects,
      skills,
      socials,
    },
    revalidate: 3600,
  };
};
