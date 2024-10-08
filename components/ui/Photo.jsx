// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const Photo = () => {
//   return <div className="w-full h-full relative">
//     <motion.div>
//     <div className="w-[298px] h-[298px] xl:w-[498] xl:h-[498]">
//       <Image 
//       src="C:\Users\KIIT\Desktop\portfolio_main\public\hdr-removebg-preview.png" 
//       priority 
//       quality={100} 
//       fill 
//       alt="" 
//       className="object-contain" 
//       />
//     </div>
//     </motion.div>
//     </div>;
// }

// export default Photo


"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";

// const Photo = () => {
//   return (
//     <div className="w-full h-full relative flex justify-center items-center">
//       <motion.div
//         initial={{ opacity: 0}}
//         animate={{
//           opacity: 1,
//           transition: {
//             delay: 1.5,
//             duration: 0.4,
//             ease: "easeIn"
//           },
//         }}
//       >
//       {/*Image */}
//         <motion.div 
//         initial={{ opacity: 0}}
//         animate={{
//           opacity: 1,
//           transition: {
//             delay: 2,
//             duration: 0.4,
//             ease: "easeInOut"
//           },
//         }}
//         className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
//           <Image 
//             src="/portfolio_headshot.png" 
//             priority 
//             quality={100} 
//             fill 
//             alt="" 
//             className="object-cover w-full h-full" 
//           />
//         </motion.div>

//       {/*circle*/}
//       <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
//       fill="transparent"
//       viewBox="0 0 506 506"
//       xmlns="https://www.w3.org/2000/svg">
//         <motion.circle 
//         cx="253" 
//         cy="253" 
//         r="250" 
//         stroke="#00ff99"  
//         strokeWidth="4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         initial={{strokeDasharray: "24 10 0 0"}}
//         animate={{
//           strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//           rotate: [120, 360],
//         }}
//         transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: "reverse",

//         }}
//         />
//       </motion.svg>
//       </motion.div>
//     </div>
//   );
// }

// export default Photo;


const Photo = () => {
  return (
    <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      {/* Image with Circular Mask */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.5,
            duration: 0.4,
            ease: "easeInOut"
          },
        }}
        className="w-full h-full rounded-full overflow-hidden absolute mix-blend-lighten"
      >
        <Image 
          src="/profilephoto.png" 
          priority 
          quality={100} 
          fill 
          alt="Headshot" 
          className="object-cover w-full h-full transform translate-y-8 translate-x-5 scale-101" 

        />
      </motion.div>

      {/* Circle Overlay */}
      <motion.svg 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeInOut"
        },
      
      }}
      className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
       fill="transparent"
      viewBox="0 0 506 506"
       xmlns="https://www.w3.org/2000/svg">
         <motion.circle 
            cx="253" 
            cy="253" 
           r="250" 
           stroke="#00ff99"  
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
         initial={{strokeDasharray: "24 10 0 0"}}
         animate={{
           strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
           rotate: [120, 360],
        }}
        transition={{
             duration: 20,
             repeat: Infinity,
             repeatType: "reverse",

         }}
         />
       </motion.svg>
    </div>
  );
};

export default Photo;