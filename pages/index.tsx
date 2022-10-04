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
import { FaGithub } from 'react-icons/fa';

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

        {/* SEO METATAGS */}
        <meta
          name='author'
          content='Dominik Czekański'
        />
        <meta
          name='description'
          content='Hi, my name is Dominik, and I am a web developer from Poland.'
        />
        <meta
          name='keywords'
          content='dominik czekański czekanski czekanskyy czekanski.dev dev developer'
        />

        {/* PWA METATAGS */}
        <link
          rel='shortcut icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
        />
        <meta
          name='theme-color'
          content='#262626'
        />
        <link
          rel='manifest'
          href='/manifest.json'
        />
      </Head>

      <Header />

      <Hero
        socials={socials}
        pageData={pageData}
        contact={sections.contact}
      />

      <About pageData={pageData} />

      <Projects projects={projects} />

      <Skills skills={skills} />

      <Contact pageData={pageData} />

      <ScrollButton visible={scrollVisible} />

      <footer className='bg-neutral-900 snap-center flex items-center justify-between p-8 text-xs sm:text-sm md:text-base'>
        &copy; {new Date().getFullYear()} Dominik Czekański
        <span className='flex gap-x-5'>
          Made with 💟 & Next.js
          <a
            href='https://github.com/czekanskyy/czekanski-dev'
            target='_blank'
            rel='noreferrer noopener'
            className='flex items-center gap-x-2 text-red-500 font-medium'
          >
            <FaGithub />
            source code
          </a>
        </span>
      </footer>
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
    revalidate: 600,
  };
};
