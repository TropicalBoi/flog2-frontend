import React from 'react'
import "./ProfileForm.css";

function ProfileFrom() {
    function BMI (weight,height){
        const result = weight / (height**2) 
        return result;
    }
    return(
    <div className='ProfileForm'>
        <form>
            <input type="text" className='UserName' placeholder='Your name here'></input> <br /> 
            <label>Weight: <input type="text" className='UserInfo' ></input> Kg</label>
            <label>Height: <input type="text" className='UserInfo'></input> Cm</label>
            <label>BMI: xxx</label>
            
        </form>
    </div>
    )
}

export default ProfileFrom