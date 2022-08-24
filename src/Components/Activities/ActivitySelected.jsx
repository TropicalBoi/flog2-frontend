import React, { useState, useEffect } from "react";
import Warmup from "./warmup.jpg";
import "./ActivitySelected.css";
import { css } from "@emotion/css";
import Popup from "./PopUp";
import { useForm } from "react-hook-form";
import axios from "axios";

function ActivitySelect(props) {
  // const initialActivities = [
  //   {
  //     id: 1,
  //     img: `https://img.youtube.com/vi/JvKJ53kWQrE/maxresdefault.jpg`,
  //     name: "Aerobic",
  //     duration: "20",
  //     isDone: true,
  //   },
  //   {
  //     id: 2,
  //     img: Warmup,
  //     name: "Warm up body",
  //     duration: "10",
  //     isDone: false,
  //   },
  //   {
  //     id: 3,
  //     img: `https://img.youtube.com/vi/JvKJ53kWQrE/maxresdefault.jpg`,
  //     name: "Aerobic",
  //     duration: "15",
  //     isDone: false,
  //   },
  // ];

  const [activity, setActivity] = useState([]);

  const [loading, setLoading] = useState(false);

  const [buttonPopup, setButtonPopup] = useState(false);

  const fetch = async () => {
    const data = await axios.get(
      "https://flog2-backend.herokuapp.com/exercises/"
    );
    setActivity(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const watchYoutube = watch("chooseStyle", false);

  const onSubmit = async (data) => {
    setButtonPopup(false);
    setLoading(true);
    await axios.post(
      "https://flog2-backend.herokuapp.com/exercises/add/",
      {
        ...data,
        isDone: false,
      }
    );
    await fetch();
    setLoading(false);
  };

  const onClickDone = async (data) => {
    setLoading(true);
    await axios.post(`https://flog2-backend.herokuapp.com/exercises/update/${data._id}/`,
    {
      ...data,
      isDone: true,
    }
    );
    await fetch();
    setLoading(false);
  };

  // alert(JSON.stringify({...data, isDone: false}));

  

  return loading ? (
    <div className="Loading">
      <p>updating.....</p>
    </div>
  ) : (
    <div className="ActivitiesSelect">
      {activity.map((ActivitiesDetails) => {
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
              @media (max-width: 428px) {
                width: 80%;
                border-radius: 3vw;
              }
              ${ActivitiesDetails.isDone
                ? "background-color: rgba(15, 202, 90, 0.12);"
                : "background-color: white;"}
            `}
          >
            {/* <div className="ActivitiesImg">
              <img src={ActivitiesDetails.img} />
            </div> */}
            <div className="ActivitiesTitle">
              <p>{ActivitiesDetails.description}</p>
              <p>{ActivitiesDetails.duration} mins</p>
            </div>
            {ActivitiesDetails.isDone && (
              <button className="AddToPost" onClick={() => props.addToPost(ActivitiesDetails)}>
                <p>Add to post</p>
              </button>
            )}
            {!ActivitiesDetails.isDone && (
              <button className="Done" onClick={() => {onClickDone(ActivitiesDetails)}}>
                <p>Done</p>
              </button>
            )}
          </div>
        );
      })}
      <div className="ActivitiesCard">
        <button onClick={() => setButtonPopup(true)}>+</button>{" "}
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="ActivityBox">
            <label>
              <b>Activity</b>
            </label>
            <input
              {...register("description", {
                required: true,
              })}
            />
            {errors?.description?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          {/* <div className="ChooseStyleBox">
            <label>
              <b>Choose your style</b>
            </label>
            <div className="TwoStyles">
              <div className="EachStyle">
                <input
                  type="radio"
                  value="youtube"
                  {...register("chooseStyle")}
                />
                <p>Follow youtube</p>
              </div>
              <div className="EachStyle">
                <input
                  type="radio"
                  value="yourStyle"
                  {...register("chooseStyle")}
                />
                <p>Do it your way</p>
              </div>
            </div>
            {watchYoutube === "youtube" && (
              <>
                <input {...register("youtubeLink")} />
              </>
            )}
            {watchYoutube === "yourStyle" && (
              <>
                <input {...register("yourStyle")} />
              </>
            )}
          </div> */}

          <div className="chooseDuration">
            <label>
              <b>Duration</b>
            </label>
            <input type="number" {...register("duration", { min: 1 })} />
            {errors.duration && <p>{"Atleast it should be 1 minutes!"}</p>}
          </div>

          <input type="submit" value="CREATE" />
        </form>
      </Popup>
    </div>
  );
}

export default ActivitySelect;
