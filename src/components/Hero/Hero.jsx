
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
            <a className='resume' href="https://docs.google.com/document/d/1AxxrR1oXF7gkpOrNp7n1e4g9cwN0JiNk/edit?usp=sharing&ouid=105292946902482907809&rtpof=true&sd=true">Resume</a>
            <button className='contactme'> <a href="#Contact">Contact Me</a> </button>
        </div>
       </div>
       </div>
       <div className="imageContainer">
        <img className='heroImg' src="profile.jpg" alt="" />
       </div>
       
    </div>
  )
}

export default Hero
