import React from 'react'
import './Landing.css'
import Datebar from '../Datebar/Datebar'
import ProfileLanding from './Profile'
import Status from './Status'

function Landing() {
    return (
    <div className = 'Landing'>
   
        <Datebar />
        
        <div className = 'LandingData'>
            <ProfileLanding />
            <Status />
        </div>
        
    </div>
    )
    
}

export default Landing