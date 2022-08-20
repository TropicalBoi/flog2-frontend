import React from "react";
import "./Landing.css";
import Datebar from "../Datebar/Datebar";
import ProfileLanding from "./Profile";
import StatusList from "./StatusList";
import StatusPic1 from "../../assets/StatusPic1.jpg";
import StatusPic2 from "../../assets/StatusPic2.jpg";

function Landing() {
  const initialStatusList = [
    {
      img: StatusPic1,
      activities: [
        {
          name: "Warm up body",
          duration: "10",
        },
        {
          name: "Weight",
          duration: " 15",
        },
      ],
      msg: "ไม่อยากวิ่งแล้ว!",
      date: "Tue, 10 AUG 2022",
      id: 4,
    },
    {
      img: StatusPic1,
      activities: [
        {
          name: "Warm up body",
          duration: "10",
        },
        {
          name: "Weight",
          duration: " 15",
        },
      ],
      msg: "ไม่อยากวิ่งแล้ว!",
      date: "Tue, 10 AUG 2022",
      id: 1,
    },
    {
      img: StatusPic2,
      activities: [
        {
          name: "Warm up body",
          duration: "10",
        },
      ],
      msg: "เหนื่อยจุงเบย แต่ฉันจะผอม",
      date: "Tue, 10 AUG 2022",
      id: 2,
    },
    {
      img: StatusPic2,
      activities: [
        {
          name: "Warm up body",
          duration: "10",
        },
      ],
      msg: "วันแรก!",
      date: "Mon, 9 AUG 2022",
      id: 3,
    },
  ];

  return (
    <div className="Landing">
      <Datebar />

      <div className="LandingData">
        <ProfileLanding />
        <StatusList statusList={initialStatusList} />
      </div>
    </div>
  );
}

export default Landing;
