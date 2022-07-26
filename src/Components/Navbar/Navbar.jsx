import React from 'react';
import './Navbar.css';
import AddButton from './Add.svg';
import HomeButton from '../../LOGO.svg'
import ProfilePic from './ProfilePic.jpg'

function Navbar() {
    return (
      <div className='Navbar'>
        <img className='AddButton' src={AddButton} />
        <img className='HomeButton' src={HomeButton} />
        <div className='ProfilePic'>
            <img className='UserPic' src={ProfilePic} alt="" />    
        </div>
      </div>
    )
  }

export default Navbar


