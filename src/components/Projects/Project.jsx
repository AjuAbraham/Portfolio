import React from 'react'
import '../Projects/project.scss';
import {motion,useScroll,useSpring, useTransform} from 'framer-motion';
import { useRef } from 'react';
const items=[{
  id:1,
  title: 'Crypto App',
  img: "\crypto.PNG",
  desc:"Crypto Currency App with Reactjs which tracks market value of any crypto Currency using coinGeko API",
  link:"https://crypto-app-git-main-ajus-projects.vercel.app",
},
{
id:2,
title: 'Todo',
img: "\Todo.png",
desc:"A todo website with React.js that allow to track all the activites we would follow thorught the day.",
link:"https://todo-6xyocbfty-ajus-projects.vercel.app",

},
{
id:3,
title: 'Currency Converter',
img: "\currencyConverter.PNG",
desc:"The currency Converter with react helps to determine the Global rates of any currency",
link:"https://currency-convert-three.vercel.app",

},

]
const Single =({item})=>{
  const ref= useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
  });
  const yDisplace = useTransform(scrollYProgress,[0,1],[-300,300]);
      return(
        <section >
          <div className="container">
            
            <div className="imgContainer" ref={ref}>
            <img  src={item.img} alt="" / >
            </div>
            <motion.div className="textContainer"  style={{y:yDisplace}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target='blank'>Visit</a>
            </motion.div>
          </div>
        </section>
      );
}
const Project = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["end end",'start start']
  })
  const increaseX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <div className='project' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX:increaseX}} className="progressBar"></motion.div>
      </div>
      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Project
