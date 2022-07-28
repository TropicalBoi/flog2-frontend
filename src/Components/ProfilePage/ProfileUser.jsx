import React from 'react';
import './ProfileUser.css';
import ProfilePic from './ProfilePic.jpg'
import ProfileFrom from './ProfileFrom';

function ProfileUser() {
    return (
      
        <div className='ProfileUser'>
            <div className='UserPicContainer'>
                <img className='ProfileUserPic' src={ProfilePic} alt='' />
            </div>
            <ProfileFrom />
            
        </div>
      
    )
}

export default ProfileUser