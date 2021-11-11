import React from "react";
import styled from "styled-components";
import TaskTitleInput from "./TaskTitleInput/TaskTitleInput";
import TaskTimeInput from "./TaskTimeInput/TaskTimeInput";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/taskActions";
const StyledEventForm = styled.div``;

function TaskForm({ addTask, taskTitle, time }) {
  return (
    <div className="container">
      <TaskTitleInput />
      <TaskTimeInput />

      <div className="row">
        <div class="d-grid col-sm-12">
          <button
            class="btn btn-lg btn-primary"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (e.type === "click") {
                addTask(taskTitle, time);
              }
            }}
            onKeyPress={(e) => {
              e.preventDefault();
              if (e.code === "Enter") {
                addTask(taskTitle, time);
              }
            }}
          >
            Create task
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tasksArr: state.tasks,
    taskTitle: state.taskTitleInput.value,
    time: state.taskTimeInput,
  };
};

const mapDispatchToProps = { addTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
