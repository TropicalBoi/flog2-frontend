import React from 'react';
import Datebar from '../Datebar/Datebar';
import './Activities.css';
import ActivityPost from './ActivityPost';
import ActivitySelect from './ActivitySelected';

function Activities() {
    return (
        
        <div className='ActivitiesPage'>
            <div>
            <Datebar />    
            </div>
            <div className='ActivitiesPage1'>
                <ActivitySelect />
                <ActivityPost />
            </div>
        </div>
      
    )
}

export default Activities