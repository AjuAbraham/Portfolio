
import './Skills.scss'
import { FaHtml5,FaCss3,FaReact,FaSass,FaNode} from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiExpress,SiTypescript } from "react-icons/si";
import { IoLogoJavascript, } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
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
  {
    id:6,
    title:"Express",
    img:<SiExpress className='logo sass'/>,
  },
  {
    id:7,
    title:"MongoDb",
    img:<DiMongodb className='logo sass'/>,
  },
  {
    id:8,
    title:"Node js",
    img:<FaNode className='logo sass'/>,
  },
  {
    id:9,
    title:"Typescript",
    img:<SiTypescript className='logo sass'/>,
  },
  {
    id:10,
    title: "Nextjs",
    img: <TbBrandNextjs className='logo sass'/>,
  }
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
