import React from "react";
import "./ActivityPost.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function ActivityPost(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();


  const onSubmit = async (data) => {
    resetField('msg')
    props.clearActivity([]);
    await axios.post(
      "https://flog2-backend.herokuapp.com/statuses/add/",
      {
        ...data,
        activities: props.posts
      }
    );
  };


  return (
    <div className="ActivityPost">
      <div className="ActivityPostBox">
        <p>How's your work out?</p>
      </div>
      <div className="doneActivities">
        {props.posts.map((activityAndDuration) => {
          return (
            <div className="addedActivity">
              <p>{activityAndDuration.description}</p>
              <p>, {activityAndDuration.duration} mins</p>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="StatusForm">
          <input
            {...register("msg", {
              required: true,
            })}
          />
          {errors?.msg?.type === "required" && (
              <p>This field is required</p>
            )}
          <input type="submit" value="POST" />
        </div>
      </form>
    </div>
  );
}

export default ActivityPost;
