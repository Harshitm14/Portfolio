"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "PriceWatch",
    title: 'project 1',
    description: "PriceWatch is a web application designed to track Amazon product prices and provide real-time updates on price changes and stock availability. It features automated email alerts for price drops and stock notifications, enhancing user engagement. The platform uses web scraping to gather and display detailed product information, including images, descriptions, lowest, highest, average, and current prices. By offering timely notifications, PriceWatch helps users make informed purchasing decisions, making it a valuable tool for savvy shoppers.",
    stack: [{ name: "NextJS" }, { name: "MongoDB" }, { name: "Tailwind CSS" } , { name: "Cheerio" } , { name: "BrightData" } , { name: "Nodemailer" }],
    image: '/assets/work/Pricewatch.png',
    live: "https://price-watch-xi.vercel.app/",
    github: "https://github.com/Harshitm14/PriceWatch",
  },
  {
    num: "02",
    category: "PredictBay",
    title: 'project 2',
    description: "PredictBay is a predictive analytics project focused on delivering actionable insights for business forecasting. Utilizing advanced machine learning algorithms, it analyzes historical data to predict future trends and outcomes. The project incorporates data preprocessing, feature engineering, and model training to enhance prediction accuracy. Through a user-friendly interface, users can interact with predictive models and visualize results, making it a valuable tool for strategic decision-making and risk management in various business scenarios.",
    stack: [{ name: "Python" }, { name: "Flask" }, { name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: '/assets/work/predictbayimg.png',
    live: "https://predictbay-v1.onrender.com/",
    github: "https://github.com/deepraj21/Predictbay",
  },
  // {
  //   num: "03",
  //   category: "DecisionHub",
  //   title: 'project 3',
  //   description: "DecisionHub is an intuitive platform designed to streamline decision-making processes through advanced natural language processing. It allows business analysts to create and manage decision strategies using English-like rule writing, eliminating the need for complex coding. The tool supports real-time, drag-and-drop rule modifications and features live debugging for swift error resolution. DecisionHub enhances agility in strategy adaptation and simplifies complex decision frameworks, making it an essential asset for effective business strategy management.",
  //   stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Flask" }, { name: "Python" }],
  //   image: '/assets/work/thumb3.png',
  //   live: "decisionhub-u8tx.onrender.com/",
  //   github: "https://github.com/deepraj21/DecisionHub",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project desc */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className='flex flex-wrap gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href = {project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
              modules={[Autoplay]}
              autoplay={{delay: 10000 , disableOnInteraction: true}}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full overflow-hidden'>
                      <Image
                        src={project.image}
                        fill
                        className='object-coveer'
                        alt=''
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/*slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
