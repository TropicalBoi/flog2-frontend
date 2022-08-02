import {React , useState } from "react";
import "./ProfileUser.css";
import ProfilePic from "./ProfilePic.jpg";
import ProfileFrom from "./ProfileFrom";

function ProfileUser() {

  const [img, setImg] = useState({ProfilePic})
  function onImageChange(e) {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  }

  return (
    <div className="ProfileUser">
      <div className="UserPicContainer">
        <img className="ProfileUserPic" src={img} alt="" />
      </div>
      <form>
        <input type="file" onChange={onImageChange} />
      </form>
      <ProfileFrom />
    </div>
  );
}

export default ProfileUser;
