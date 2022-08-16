import React from 'react';
import Warmup from './warmup.jpg';
import './ActivitySelected.css'

function ActivitySelect() {
    return (
        <div className='ActivitiesSelect'>            

            <div className='ActivitiesSelectedBox'>
                <div className='ActivitiesImg'>
                    <img className='ActivitiesImgData' src= { Warmup } />
                </div>
                <div className='ActivitiesTitle'>
                    <p>Warm Up</p>
                </div>
                <div className='ActivitiesButton'>
                    <button className='Action'>Add to post</button>
                </div>
            </div>

            <div className='ActivitiesSelectedBox'>
                <div className='ActivitiesImg'>
                    <img className='ActivitiesImgData' src= { Warmup } />
                </div>
                <div className='ActivitiesTitle'>
                    <p>Warm Up</p>
                </div>
                <div className='ActivitiesButton'>
                    <button className='Action'>Add to post</button>
                </div>
            </div>

            <div className='ActivitiesSelectedBox'>
                <div className='ActivitiesImg'>
                    <img className='ActivitiesImgData' src= { Warmup } />
                </div>
                <div className='ActivitiesTitle'>
                    <p>Warm Up</p>
                </div>
                <div className='ActivitiesButton'>
                    <button className='Action'>Add to post</button>
                </div>
            </div>
         
        </div>
    )
}

export default ActivitySelect