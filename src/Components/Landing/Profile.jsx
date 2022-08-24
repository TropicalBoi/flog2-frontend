import React, {useState} from "react";
import ProfilePic from "../ProfilePage/ProfilePic.jpg";
import './Profile.css'
function ProfileLanding() {
  //database
  const userInfo = {
    firstName:'Nam',
    lastName: 'Jai',
    weight: 50,
    height: 170,
    bmi:'bmi'
  }
  const[firstName, setfirstName] = useState(userInfo.firstName)
  const[lastName, setlastName] = useState(userInfo.lastName)

  return (
    <div className="ProfileComponent">
        <div className='ProfileImg'>
            <img src={ProfilePic} className='ImgDetail'/>
        </div>
        <div className='ProfileName'>
            <h1>{firstName} {lastName}</h1>
        </div>  
      
      <p className='ProfileDetail'>คุณออกกำลังกายต่อเนื่องมาแล้ว: 9 วัน</p>
      <p className='ProfileDetail'>ครั้งล่าสุดเมื่อ: 1 วันที่แล้ว </p>
    </div>
  );
}

export default ProfileLanding;