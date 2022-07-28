import React from 'react';
import './Navbar.css';
import AddButton from './Add.svg';
import HomeButton from '../../LOGO.svg'
import ProfilePic from '../ProfilePage/ProfilePic.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className='Navbar'>
        <img className='AddButton' src={AddButton} />
        <Link to = '/'> 
        <img className='HomeButton' src={HomeButton} />
        </Link>
       
        <Link to = '/ProfileUser'>
        <div className='ProfilePic'>
            <img className='UserPic' src={ProfilePic} alt="" />    
        </div>
        </Link>
        
      </div>
    )
  }

export default Navbar


