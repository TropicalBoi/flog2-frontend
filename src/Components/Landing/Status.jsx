import React from "react";
import "./Status.css";

function Status(props) {
  return (
    <div className="temp">
      <div className="Status">
        {/* <div className="ActivityImg">
          <img src={props.status.img} />
        </div> */}
        <div className="ActivityData">
          <p>{props.status.username}</p>
          <p>
            {props.status.activities.map((activityDetail) => {
              return (
                <div>
                  <p activityDetail={activityDetail}>
                    {activityDetail.description}, {activityDetail.duration} mins
                  </p>
                </div>
              );
            })}
          </p>
          <p>{props.status.msg}</p>
          <p>{props.status.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Status;
