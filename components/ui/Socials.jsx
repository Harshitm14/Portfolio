import {FaGithub , FaLinkedinIn} from "react-icons/fa";
import { SiLeetcode , SiGmail } from "react-icons/si";

import Link from "next/link";

const social = [
  {icon : <FaGithub />, path: 'https://github.com/Harshitm14'},
  {icon : <FaLinkedinIn />, path: 'https://www.linkedin.com/in/harshit-mania-720bbb236/'},
  {icon : <SiLeetcode />, path: 'https://leetcode.com/u/HarshitMania/'},
  {icon : <SiGmail />, path: 'mailto:harshitmaniawork@gmail.com'},


];

const Socials = ({containerStyles , iconStyles}) => {
  return <div className={containerStyles}>
      {social.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      })}
    </div>;
  
};

export default Socials


