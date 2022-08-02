import React from 'react'
import './Landing.css'
import Datebar from '../Datebar/Datebar'
import ProfileLanding from './Profile'

function Landing() {
    return (
    <div className = 'Landing'>
        <Datebar />
        <ProfileLanding />
    </div>
    )
    
}

export default Landing