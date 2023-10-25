import React from 'react'
import {motion} from 'framer-motion'
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Link = () => {
  const navs =["About","Skills","Projects","Contact"];
  return (
    <motion.div className='link' variants={variants}>
      {
        navs.map((nav)=>(
          <motion.a href= {`#${nav}`}  key={nav} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{nav}</motion.a>
        ))
      } 
    </motion.div>
  )
}

export default Link
