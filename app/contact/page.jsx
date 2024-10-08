"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, 
  SelectContent, 
  SelectGroup,
  SelectItem,  // Make sure this is the correct path for SelectItem
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";  // Correct module for Select components

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8260153995",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harshitmaniawork@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bokaro Steel City, Jharkhand, 827006",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
         opacity: 1, 
         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" name="contact" method="POST" netlify>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
              I'd love to connect! Whether for collaboration, questions, or opportunities, feel free to drop a message below or reach out via email. I'll get back to you as soon as possible.              </p>
              {/*input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="fname" placeholder="Firstname" />
                <Input type="text" name="lname" placeholder="Lastname" />
                <Input type="email"  name="email" placeholder="Email Address" />
                <Input type="number" name="phone" placeholder="Phone number" />
              </div>
              {/*select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Front-End Development</SelectItem>
                    <SelectItem value="design">Full Stack Development</SelectItem>
                    <SelectItem value="branding">Machine Learning</SelectItem>
                    <SelectItem value="marketing">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*Textarea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                type="text"
              />
              {/*Btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/*Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px]  xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                  
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
