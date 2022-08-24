import React, { useState } from "react";
import Datebar from "../Datebar/Datebar";
import "./Activities.css";
import ActivityPost from "./ActivityPost";
import ActivitySelect from "./ActivitySelected";

function Activities() {

  const [activityDetail, setActivityDetail] = useState([]);

  const getActivityDetail = (activity) => {
    if(activityDetail.find((a) => a._id===activity._id )){
      return;
    }
    setActivityDetail([...activityDetail,activity])
  }
  
  return (
    <div className="ActivitiesPage">
      <div>
        <Datebar />
      </div>
      <div className="ActivitiesPageData">
        <ActivitySelect addToPost={getActivityDetail} />
        <ActivityPost posts={activityDetail} clearActivity={setActivityDetail} />
      </div>
    </div>
  );
}

export default Activities;
