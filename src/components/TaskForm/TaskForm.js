import React, { useRef } from "react";

import { connect } from "react-redux";
import { addTask } from "../../redux/actions/taskList";
import { resetTaskTitle } from "../../redux/actions/taskTitleInput";

import TaskTitleInput from "./TaskTitleInput/TaskTitleInput";

function TaskForm({ addTask, taskTitle, time, resetTaskTitle }) {
  const titleInput = useRef(null);

  const pressedInput = (e) => {
    if (e.target === titleInput.current && e.charCode === 13) {
      e.preventDefault();
      if (e.code === "Enter") {
        addTask(taskTitle, time);
        resetTaskTitle();
      }
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
