import {animate,motion} from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate:{
    top: "100%",
  },
  exit: {
    top: ["100%","0%"],
  },
};
//caluclation the reverse index for stairs effect
const reverseIndex = (index) => {
  const totalSteps = 6; //number of decided step
  return totalSteps - index -1;
};

const Stairs = () => {
  return <>
    
      {/*rendering 6 motion divs , each forming a step of stairs
      each div will have same animation defined by stairsAnimation object
      The delay for each div is calculated dynamically based on it's reversed index,
      creating an effect with decreasing delay for each subsequent step*/}
  {[...Array(6)].map((_,index)=>{
    return (
    <motion.div key={index}  
    variants={stairAnimation} 
    initial="initial"
    animate="animate" 
    exit="exit" 
    transition={{
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.1 * reverseIndex(index),
    }}
    className="h-full w-full bg-blueGray-400 relative"
    />
    );
  })}
  </>
  
}

export default Stairs
