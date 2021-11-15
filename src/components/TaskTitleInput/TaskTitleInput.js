import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/taskTitleInput";
import { addTask } from "../../redux/actions/taskList";

function TaskTitleInput({ value, setTaskTitle, resetTaskTitle, addTask }) {
  const pressedInput = (e) => {
    if (e.target && e.charCode === 13) {
      e.preventDefault();
      addTask(value, new Date().getTime());
      resetTaskTitle();
    }
  };

  return (
    <>
      <div className="form-floating">
        <textarea
          id="floatingTextarea"
          className="form-control col-12"
          placeholder="Leave a task tittle here"
          autoFocus
          value={value}
          onKeyPress={pressedInput}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.taskTitleInput, ownProps };
};

const mapDispatchToProps = {
  addTask,
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTitleInput);
