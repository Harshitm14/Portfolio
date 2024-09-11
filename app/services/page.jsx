"use client"

import {BsArrowDownRight} from 'react-icons/bs';

const services = [
  {
    num:'01',
    title: 'Front-End Development',
    description: 
    [
      <li>Proficient in HTML, CSS, Tailwind CSS, and JavaScript.
</li>,
      <li>Experience with frameworks like ReactJS and back-end technologies such as NodeJS.
</li>,
      <li>Skilled in integrating third-party APIs and ensuring cross-browser compatibility.
</li>
    ],
    href: "https://decisionhub-u8tx.onrender.com/"
  },
  {
    num:'02',
    title: 'Full Stack Development',
    description: 
    [
      <li>Competent in both front-end and back-end technologies.
</li>,
      <li>Familiar with MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) for creating dynamic, scalable web applications.</li>,
      <li>Experience in developing and deploying full-stack projects </li>
    ],
    href: "https://price-watch-xi.vercel.app/"
  },
  {
    num:'03',
    title: 'Machine Learning and Data Science',
    description: 
    [
      <li>Proficient in HTML, CSS, Tailwind CSS, and JavaScript.</li>,
      <li>Experience with frameworks like ReactJS and back-end technologies such as NodeJS.</li>,
      <li>Skilled in integrating third-party APIs and ensuring cross-browser compatibility.
</li>
    ],
    href: "https://predictbay-v1.onrender.com/"
  },
  {
    num:'04',
    title: 'Version Control and Collaboration',
    description: 
    [
      <li>Proficient in using Git and GitHub for version control, enabling efficient team collaboration and project management.</li>,
      <li>Experience working in teams to deliver high-quality, scalable solutions in a timely manner.
</li>
    ],
    href: "https://github.com/Harshitm14"
  },
];

import { motion } from "framer-motion";
import Link from 'next/link';
const Services = () => {
  return (
  <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
  <div className="container mx-auto">
  <motion.div
  initial={{opacity: 0}}
  animate={{
    opacity: 1,
    transition: {
      delay: 2.4,
      duration: 0.4,
      ease: "easeIn"
    },
  }}
  className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
  >
    {services.map((service,index)=>{
      return (
      <div 
      key={index}
      className="flex-1 flex flex-col justify-center gap-6 group"
      >
        {/*top */}
        <div className='w-full flex justify-between items-center'>
          <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
          <Link href={service.href} target="_blank" className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
            <BsArrowDownRight className="text-primary text-3xl" />
          </Link>
        </div>
        {/*title */}
        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition all duration-500'>{service.title}</h2>
        {/*description */}
        <p className='text-white/60'>{service.description}</p>
        {/*border */}
        <div className='border-b border-white/20 w-full'></div>
      </div>
      );
  })}
  </motion.div>
  </div>
  </section>
  );
  
};

export default Services;
