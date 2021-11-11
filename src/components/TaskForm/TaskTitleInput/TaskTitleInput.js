import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/taskTitleInput";

function TaskTitleInput({ value, setTaskTitle, resetTaskTitle }) {
  return (
    <div class="input-group mb-3">
      <input
        autoFocus
        value={value}
        type="text"
        class="form-control"
        placeholder="Set your task tittle"
        aria-label="Set your task tittle"
        aria-describedby="button-addon2"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        class="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={resetTaskTitle}
      >
        Reset field
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.taskTitleInput;
};

export default connect(mapStateToProps, actions)(TaskTitleInput);
