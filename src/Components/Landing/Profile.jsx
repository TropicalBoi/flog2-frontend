import React, {useState} from "react";
import './Profile.css'
import TengProfile from "../../assets/Teng.jpg";


function ProfileLanding() {
  //database
  const userInfo = {
    firstName:'Err',
    lastName: 'Elvis',
    weight: 50,
    height: 170,
    bmi:'bmi'
  }
  const[firstName, setfirstName] = useState(userInfo.firstName)
  const[lastName, setlastName] = useState(userInfo.lastName)

  return (
    <div className="ProfileComponent">
        <div className='ProfileImg'>
            <img src={TengProfile} className='ImgDetail'/>
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