import React from "react";
import ProfilePic from "../ProfilePage/ProfilePic.jpg";

function ProfileLanding() {
  return (
    <div className="ProfileComponent">
      <img src={ProfilePic} alt="" />
      <h1>NAM PRATHAI</h1>
      <p>คุณออกกำลังกายต่อเนื่องมาแล้ว: 9 วัน </p>
      <p>ครั้งล่าสุดเมื่อ: 1 วันที่แล้ว </p>
    </div>
  );
}

export default ProfileLanding;