import React from "react";

function TaskItem({ title, time }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div role="list-item__title">{title}</div>
        <span
          className="badge bg-secondary align-middle"
          role="list-item__time"
        >
          {time}
        </span>
      </li>
    </>
  );
}

export default TaskItem;
