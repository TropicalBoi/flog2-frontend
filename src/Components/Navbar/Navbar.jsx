import React from 'react';
import './Navbar.css';
import AddButton from './Add.svg';
import HomeButton from '../../LOGO.svg'
import ProfilePic from '../ProfilePage/ProfilePic.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className='Navbar'>
        <Link to='/Activities' className='AddButton'>
          <img className='NavBarIcon' src={AddButton} />
        </Link>

        <Link to='/' className='HomeButton'> 
          <img className='NavBarIcon' src={HomeButton} alt=""/>
        </Link>
       
        <Link to='/ProfileUser'>
        <div className='ProfilePic'>
            <img className='NavBarIcon' src={ProfilePic} alt="" />    
        </div>
        </Link>
        
      </div>
    )
  }

export default Navbar


