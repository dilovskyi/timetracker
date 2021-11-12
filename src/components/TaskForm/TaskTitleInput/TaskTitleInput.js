import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/taskTitleInput";

function TaskTitleInput({ value, setTaskTitle, resetTaskTitle, titleRef }) {
  return (
    <>
      <input
        ref={titleRef}
        autoFocus
        value={value}
        type="text"
        className="form-control"
        placeholder="Set your task tittle"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={resetTaskTitle}
      >
        Reset field
      </button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.taskTitleInput, ownProps };
};

export default connect(mapStateToProps, actions)(TaskTitleInput);
