import React, { useRef } from 'react'
import '../Parallax/parallax.scss';
import {motion,useTransform,useScroll} from 'framer-motion'
const Parallax = ({type}) => {
  const ref = useRef();
  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start","end start"],
  })
   const yText = useTransform(scrollYProgress,[0,1],["0%","400%"])
   const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <div className='parallax' ref={ref} style={{background: type==='Experience'? 
    'linear-gradient(180deg,#111132,#0c0c1d)': "linear-gradient(180deg,#111132,#505064)",}}>
      <motion.h1 style={{y:yText}}>{type=='Skills'? "Technical Skills" : " Projects " }</motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div style={{y:yBg,backgroundImage: `url(${type==='Skills'?'/planets.png':"\sun.png"})`}} className="planets" ></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
