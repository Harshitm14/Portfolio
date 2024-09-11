"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiMongodb
} from 'react-icons/si';
import {
  TbSql,
  TbHexagonLetterCFilled
} from 'react-icons/tb';

// about data map
const about = {
  title: 'About Me',
  description: `I am a final-year B.Tech student at KIIT University, specializing in Computer Science with a strong foundation in web development and programming. I have hands-on experience with technologies like HTML, CSS, JavaScript, and ReactJS, alongside frameworks like Tailwind CSS and NodeJS. Along with that, I also have experience with databases and query languages such as MongoDB and SQL. Passionate about building efficient, user-focused applications, I have developed projects like PriceWatch, a product-tracking tool, and PredictBay, a stock prediction platform. My achievements include being a national finalist in Solving for India by GeeksforGeeks and participating in Flipkart Grid. I am eager to collaborate with innovative teams and contribute to impactful projects.
  \n\n
Let's connect!`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Harshit Mania",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8260153995",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "harshitmaniawork@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Odia",
    },
  ],
};

// experience data map
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "I completed a web development internship at CodeClause, where I developed responsive, cross-browser compatible web pages using front-end frameworks. I also integrated third-party APIs to enhance functionality and user experience. This internship honed my ability to meet deadlines and work independently on complex projects.",
  items: [
    {
      company: "CodeClause",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    
  ]
};

// education data map
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "I am pursuing a B.Tech in Computer Science at KIIT University, Bhubaneswar, with a current GPA of 8.62, expected to graduate in July 2025. My academic foundation is complemented by practical experience in web development and participation in national-level tech competitions.",
  items: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      degree: "Undergraduate -CSE",
      duration: "2021 - 2025",
    },
    {
      institution: "Delhi Public School, Bokaro Steel City",
      degree: "High School - Class 12th",
      duration: "2021",
    },
    {
      institution: "Delhi Public School, Bokaro Steel City",
      degree: "High School - Class 10th",
      duration: "2019",
    },
  ],
};

// skills data map
const skills = {
  title: "My Skills",
  description: "Proficient in C, C++, HTML, CSS, Tailwind CSS, Git, and GitHub, with familiarity in Java, JavaScript, Python, ReactJS, MongoDB, NodeJS, and SQL. I excel at building responsive, user-friendly web applications and have experience working with APIs, web scraping, and deep learning models.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <TbHexagonLetterCFilled />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <TbSql />,
      name: "SQL",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/*experience */}
            <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item,index)=> {
                  return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                    <div className='flex items-center gap-3'>
                    {/*dot */}
                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                    <p className='text-white/60'>{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
            </div>
          </TabsContent>

            {/*education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item,index)=> {
                  return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                    <div className='flex items-center gap-3'>
                    {/*dot */}
                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                    <p className='text-white/60'>{item.degree}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
            </div>
          </TabsContent>

            {/*skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className='text-4xl font-bold'>{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                  return (
                  <li key={index}>
                  <TooltipProvider delayDuration={100} >
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>{skill.name}
                  </li>
                );
                })}
              </ul>
            </div>          
          </TabsContent>

            {/*about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60">{item.fieldName}:</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
                  
                ))}
                </ul>
              </div>
        </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
