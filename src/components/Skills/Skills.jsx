import React from 'react'
import './Skills.scss'
import { FaHtml5,FaCss3,FaReact,FaSass,} from 'react-icons/fa';
import { IoLogoJavascript, } from "react-icons/io";
const cards =[

  {
    id:1,
    title:"Html",
    img: <FaHtml5 className='logo html'/>,
  },
  {
    id:2,
    title: "Css",
    img: <FaCss3 className='logo css'/>,
  },
  {
    id:3,
    title:"Javascript",
    img:<IoLogoJavascript className='logo js' />,
  },
  {
    id:4,
    title:"React",
    img:<FaReact className='logo reactjs'/>,
  },
  {
    id:5,
    title:"Sass",
    img:<FaSass className='logo sass'/>,
  },
];
const Skills = () => {
  return (
      <div className="Skills">
        
          <div className='textContainer'>
            <h3>Technical Skills</h3>
            <p>These are Technologies I have worked with</p>
          </div>
          <div className='cardContainer'>
            {cards.map((card)=>(
                 <div className='Card' key={card.id}>
                {card.img}
                 <p>{card.title}</p>
               </div>
            ))}
          </div>
      </div>
  )
}

export default Skills;
