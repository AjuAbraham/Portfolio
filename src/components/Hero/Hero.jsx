import React from 'react'
import {motion} from 'framer-motion'
import '../Hero/Hero.scss';
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
       <div className="textContainer" >
       <h1 >
            Hi, I'm <br/> Aju Abraham
         </h1>
         <Typewriter  options={{
            strings:["A Software Engineer","A Developer"],
            autoStart: true,
            loop: true,
            cursor:"",    
            wrapperClassName:"typewriter",}}/>
        <div className="button">
            <button className='resume'>Resume</button >
            <button className='contactme'> <a href="#Contact">Contact Me</a> </button>
        </div>
       </div>
       </div>
       <div className="imageContainer">
        <img className='heroImg' src="del.jpg" alt="" />
       </div>
       
    </div>
  )
}

export default Hero
