import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/taskTitleInput";

function TaskTitleInput({ value, setTaskTitle, resetTaskTitle }) {
  return (
    <div class="input-group mb-3 input-group-lg">
      <input
        autoFocus
        value={value}
        type="text"
        class="form-control"
        placeholder="Set your task tittle"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button class="btn btn-primary" type="button" onClick={resetTaskTitle}>
        Reset field
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.taskTitleInput;
};

export default connect(mapStateToProps, actions)(TaskTitleInput);
