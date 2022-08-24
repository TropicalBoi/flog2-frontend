import React from "react";
import "./ActivityPost.css";
import { useForm } from "react-hook-form";

function ActivityPost() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="ActivityPost">
      <div className="ActivityPostBox">
        <p>How's your work out?</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="StatusForm">
            <input
              {...register("msg", {
                required: true,
              })}
            />
            <input type="submit" value="POST" />
          </div>
        </form>
    </div>
  );
}

export default ActivityPost;
