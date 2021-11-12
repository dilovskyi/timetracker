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
        className="form-control col-12 col-lg-6"
        placeholder="Set your task tittle"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        className="btn btn-secondary col-12 col-lg-6"
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
