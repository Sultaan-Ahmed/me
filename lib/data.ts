import React from "react";
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';


export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: "About",
        hash: '#about'
    },
    {
        name: "Projects",
        hash: '#projects'
    },
    {
        name: "Skills",
        hash: '#skills'
    },
    {
        name: "Experience",
        hash: '#experience'
    },
    {
        name: "Contact",
        hash: '#contact'
    }
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        locaiton: 'Miami, FL',
        description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
        icon: React.createElement(LuGraduationCap),
        date: '2019'
    },
    {
        title: 'Front-end Developer',
        location: 'Orlando, FL',
        description: 'I worked as a front-end developer for 3 years in 1 job. I also upskiled to the full stack.',
        icon: React.createElement(CgWorkAlt)
    },
    {
        title: 'Full-Stack Developer.',
        location: 'Houston, TX',
        description: "I'm now a full stack developer working as a freelancer. My stack includes React, NextJs, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact)
    }
] as const;

export const projectsData = [
    {
        title: 'CorpComment',
        description: 'I worked as a full stack developer on this startup project for 2 years. Users can given public feedback to companies.',
        tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
        imageUrl: corpcommentImg
    },
    {
        title: 'rmtDev',
        description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting, pagination.',
        tags: ['React', 'TypeScripts', 'Next.js', 'Tailwind', 'Redux'],
        imageUrl: rmtdevImg
    },
    {
        title: "Word Analytics",
        description: 'A public web app for quick analytics on text. It shows word count, character count and social media posts limits.',
        tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg
    }
] as const;

export const skillsData = [
    'HTML',
    "CSS",
    "JavaScript",
    'TypeScript',
    "React",
    'Next.js',
    'Node.js',
    'Git',
    "Tailwind",
    'Prisma',
    'MongoDB',
    'Redux',
    'GraphQL',
    'Apllo',
    'Express',
    'PostgreSQL',
    'Python',
    'Django',
    'Framer Motion'
] as const;

