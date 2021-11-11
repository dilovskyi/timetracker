import React from "react";

function TaskItem({ title, time }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div>{title}</div>
        <span className="badge bg-secondary align-middle">{time}</span>
      </li>
    </>
  );
}

export default TaskItem;
