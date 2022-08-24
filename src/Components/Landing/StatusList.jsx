import React from "react";
import './StatusList.css';
import Status from "./Status";

const StatusList = (props) => {
  return(
    <div className="StatusList">
      {props.statusList.map((status) => {
        return (
          <Status status={status} key={status.id}/>
        )
      })}
    </div>
  )
}

export default StatusList;