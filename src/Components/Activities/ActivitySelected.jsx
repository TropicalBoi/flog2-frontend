import React, { useState } from "react";
import Warmup from "./warmup.jpg";
import "./ActivitySelected.css";
import { css } from "@emotion/css";
import Popup from "./PopUp";

function ActivitySelect() {
  const initialActivities = [
    {
      id: 1,
      img: `https://img.youtube.com/vi/JvKJ53kWQrE/maxresdefault.jpg`,
      name: "Aerobic",
      duration: "20",
      isDone: true,
    },
    {
      id: 2,
      img: Warmup,
      name: "Warm up body",
      duration: "10",
      isDone: false,
    },
    {
      id: 3,
      img: `https://img.youtube.com/vi/JvKJ53kWQrE/maxresdefault.jpg`,
      name: "Aerobic",
      duration: "15",
      isDone: false,
    },
  ];

  // <Status status={status} key={status.id}/>

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="ActivitiesSelect">
      {initialActivities.map((ActivitiesDetails) => {
        return (
          <div
            className={css`
              width: 16vw;
              height: fit-content;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              margin: 0 1vw 4vh 1vw;
              border-radius: 1vw;
              box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
              ${ActivitiesDetails.isDone
                ? "background-color: rgba(15, 202, 90, 0.12);"
                : "background-color: white;"}
            `}
          >
            <div className="ActivitiesImg">
              <img src={ActivitiesDetails.img} />
            </div>
            <div className="ActivitiesTitle">
              <p>{ActivitiesDetails.name}</p>
              <p>{ActivitiesDetails.duration} mins</p>
            </div>
            {ActivitiesDetails.isDone && (
              <button className="AddToPost">Add to post</button>
            )}
            {!ActivitiesDetails.isDone && (
              <button className="Done">Done</button>
            )}
          </div>
        );
      })}
      <div className="ActivitiesCard">
        <button className="AddButton" onClick={() => setButtonPopup(true)}>+</button>{" "}
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
        <p>This is my popup</p>
      </Popup>
    </div>
  );
}

export default ActivitySelect;
