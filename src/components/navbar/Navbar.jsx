import React from 'react'
import './navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar'>
       <Sidebar/>
      <div className="wrapper">
        <span>Portfolio</span>  
      </div>
    </div>
  )
}

export default Navbar
