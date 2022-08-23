import {React , useState } from "react";
import "./ProfileUser.css";
import ProfilePic from "./ProfilePic.jpg";
import ProfileForm from "./ProfileForm";
import Datebar from "../Datebar/Datebar";

function ProfileUser() {

  const [img, setImg] = useState({ProfilePic})
  function onImageChange(e) {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  }

  return (
    <div className="ProfileUser">
      <Datebar/>
      <div className="UserPicContainer">
        <img className="ProfileUserPic" src={img} alt="" />
      </div>
      <form>
        <input type="file" onChange={onImageChange} />
      </form>
      <ProfileForm />
    </div>
  );
}

export default ProfileUser;
