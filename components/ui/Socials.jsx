import {FaGithub , FaLinkedinIn, FaYoutube,FaTwitter} from "react-icons/fa";
import Link from "next/link";

const social = [
  {icon : <FaGithub />, path: ''},
  {icon : <FaLinkedinIn />, path: ''},
  {icon : <FaYoutube />, path: ''},
  {icon : <FaTwitter />, path: ''},


];

const Socials = ({containerStyles , iconStyles}) => {
  return <div className={containerStyles}>
      {social.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>;
  
};

export default Socials


