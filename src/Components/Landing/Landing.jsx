import React, { useState, useEffect } from "react";
import "./Landing.css";
import Datebar from "../Datebar/Datebar";
import ProfileLanding from "./Profile";
import StatusList from "./StatusList";
import axios from "axios";

function Landing() {
  // const initialStatusList = [
  //   {
  //     // img: StatusPic1,
  //     username: "Nam",
  //     activities: [
  //       {
  //         name: "Warm up body",
  //         duration: "10",
  //       },
  //       {
  //         name: "Weight",
  //         duration: "15",
  //       },
  //     ],
  //     msg: "ไม่อยากวิ่งแล้ว!",
  //     date: "Tue, 10 AUG 2022",
  //     id: 4,
  //   },
  //   {
  //     // img: StatusPic1,
  //     username: "Nam",
  //     activities: [
  //       {
  //         name: "Warm up body",
  //         duration: "10",
  //       },
  //       {
  //         name: "Weight",
  //         duration: " 15",
  //       },
  //     ],
  //     msg: "ไม่อยากวิ่งแล้ว!",
  //     date: "Tue, 10 AUG 2022",
  //     id: 1,
  //   },
  //   {
  //     // img: StatusPic2,
  //     username: "Nam",
  //     activities: [
  //       {
  //         name: "Warm up body",
  //         duration: "10",
  //       },
  //     ],
  //     msg: "เหนื่อยจุงเบย แต่ฉันจะผอม",
  //     date: "Tue, 10 AUG 2022",
  //     id: 2,
  //   },
  //   {
  //     // img: StatusPic2,
  //     username: "Nam",
  //     activities: [
  //       {
  //         name: "Warm up body",
  //         duration: "10",
  //       },
  //     ],
  //     msg: "วันแรก!",
  //     date: "Mon, 9 AUG 2022",
  //     id: 3,
  //   },
  // ];

const [status, setStatus] = useState([]);

useEffect(() => {
  const fetch = async() => {
    const data = await axios.get('https://flog2-backend.herokuapp.com/statuses/')
    setStatus(data.data)
  }
  fetch()
},[]);


  return (
    <div className="Landing">
      <Datebar />
      <div className="LandingData">
        <ProfileLanding />
        <StatusList statusList={status} />
      </div>
    </div>
  );
}

export default Landing;
