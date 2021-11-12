import React, { useRef } from "react";

import { connect } from "react-redux";
import { addTask } from "../../redux/actions/taskList";
import { resetTaskTitle } from "../../redux/actions/taskTitleInput";

import TaskTitleInput from "./TaskTitleInput/TaskTitleInput";
import TaskTimeInput from "./TaskTimeInput/TaskTimeInput";

function TaskForm({ addTask, taskTitle, time, resetTaskTitle }) {
  const titleInput = useRef(null);
  const timeInput = useRef(null);
  const createButton = useRef(null);

  const pressedInput = (e) => {
    if (e.target === titleInput.current && e.charCode === 13) {
      timeInput.current.focus();
    } else if (e.target === timeInput.current && e.charCode === 13) {
      createButton.current.focus();
    }
  };

  return (
    <form className=" needs-validation" onKeyPress={pressedInput}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="input-group mb-3 input-group-lg">
            <TaskTitleInput titleRef={titleInput} />
          </div>
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="input-group mb-3 input-group-lg">
            <TaskTimeInput timeRef={timeInput} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="d-grid col-12">
          <button
            ref={createButton}
            className="btn btn-lg btn-success"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              resetTaskTitle();
              if (e.type === "click") {
                addTask(taskTitle, time);
              }
            }}
            onKeyPress={(e) => {
              e.preventDefault();
              resetTaskTitle();
              if (e.code === "Enter") {
                addTask(taskTitle, time);
              }
            }}
          >
            Create task
          </button>
        </div>
      </div>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    tasksArr: state.tasks,
    taskTitle: state.taskTitleInput.value,
    time: state.taskTimeInput,
  };
};

const mapDispatchToProps = { addTask, resetTaskTitle };

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
