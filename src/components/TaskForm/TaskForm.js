import React from "react";
import styled from "styled-components";
import TaskTitleInput from "./TaskTitleInput/TaskTitleInput";
import TaskTimeArea from "./TaskTimeArea/TaskTimeArea";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/taskActions";
const StyledEventForm = styled.div``;

function TaskForm({ addTask, taskTitle, autoTime, userTime }) {
  return (
    <div className="container">
      <TaskTitleInput />
      <TaskTimeArea />

      <div className="row">
        <div class="d-grid col-sm-12">
          <button
            class="btn btn-lg btn-primary"
            type="button"
            onClick={(e) => {
              if (e.type === "click") {
                addTask(taskTitle, autoTime, userTime);
              }
            }}
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                addTask(taskTitle, autoTime, userTime);
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
    ...state.taskTimeArea,
  };
};

const mapDispatchToProps = { addTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
