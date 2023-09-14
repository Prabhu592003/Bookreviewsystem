import {useState } from 'react'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import ReadRaterImage from './ReadRater (1).png';
import { FaHome, FaCog,FaRegNewspaper , FaUser, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';
import { Link,Outlet } from 'react-router-dom';
import './layout.css'
import Login from '../loginpage/Login';
import Searchbar from '../searchbar/Searchbar';

const Layout = () => {
    const [isOpen,setisOpen]=useState(false);
    const [home,setHome] = useState(true);
      

  return (
    <div >
        {/* <div className='togglebutton'><button  className='buttonside' onClick={()=>setisOpen(!isOpen)}><FaBars className='hamburger-icon'/></button> </div> */}
        <div className='layout'>
           
        <div className="sidebar">  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <img className='sidebarlogo'src={ReadRaterImage} alt="Read Rater"  />
            <div className='s1f1'>
            <div className="s1f1f1">
            <button   className='buttonnav' onClick={()=>setHome(true)}  > <h2 className="s1f1h1"><FaHome className='h1icon'/><Link className='linksidebar' to = "/Searchbar" >Home</Link></h2></button> 
            <button   className='buttonnav' onClick={()=>setHome(false)} > <h2 className="s1f1h1"><FaRegNewspaper  className='h1icon'/><Link className='linksidebar' to = "/Reviewcard">Write review</Link></h2></button> 
              <button className='buttonnav' >  <h2 className="s1f1h1"><FaCog  className='h1icon'/>Settings</h2></button> 
              <button  className='buttonnav'  >  <h2 className="s1f1h1"><FaQuestionCircle  className='h1icon'/>Help</h2></button> 
            </div>
            <div className="s1f1f2">
            <button className='buttonnav'> <h2 className="s1f1h1"><FaUser className='h1icon'/>Profile</h2></button> 
            <button className='buttonnav'> <h2 className="s1f1h1"><FaSignOutAlt className='h1icon'/><Link className='linksidebar' to = "/Login">login</Link></h2></button> 
            </div>
            </div>
        </div>  </div>

        <div className='outlet'>
        {home?<Searchbar />:
           <Outlet/>}</div>
        </div>
        
       
    </div>  
  )
}

export default Layout;