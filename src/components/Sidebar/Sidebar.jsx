import React, { useState } from 'react'
import {motion} from 'framer-motion';
import './Sidebar.scss'
import Link from './links/Link'
import ToggleButton from './ToogleButton/ToggleButton'
const variants ={
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: { type: "spring",stiffness: 20},
  },
  closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {delay: 0.4,type: 'spring',stiffness: 400,damping: 40}
  }
}
const Sidebar = () => {
    const [open,setOpen]=useState(false);
  return (
    <motion.div className='sidebar'animate={open? 'open':'closed'}>
      <motion.div className={`bg`} variants={variants} style={{}}>
        <Link/>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open}/>
    </motion.div>
  )
}

export default Sidebar