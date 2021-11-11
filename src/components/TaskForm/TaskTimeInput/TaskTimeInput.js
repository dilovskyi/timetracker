import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/taskTimeInput";

function TaskTimeInput({
  itemName,
  hours,
  minutes,
  seconds,
  timeTick,
  setUserTime,
  setCurrentTime,
}) {
  const [inputFocusStatus, setInputFocusStatus] = useState(false);
  const [valueChangedStatus, setValueChangedStatus] = useState(false);
  const [loop, setLoop] = useState();

  useEffect(() => {
    if (inputFocusStatus) {
      clearInterval(loop);
    } else if (!valueChangedStatus) {
      setLoop(setInterval(timeTick, 1000));
    }
  }, [inputFocusStatus, valueChangedStatus]);

  useEffect(() => {
    return () => clearInterval(loop);
  }, []);

  return (
    <div class="input-group mb-3 col-sm-6 input-group-lg">
      <input
        onFocus={() => setInputFocusStatus(true)}
        onBlur={() => setInputFocusStatus(false)}
        value={hours + ":" + minutes + ":" + seconds}
        type="text"
        class="form-control"
        placeholder="Set time"
        aria-label="Time"
        onChange={(e) => {
          setUserTime(itemName, e.target.value);
          setValueChangedStatus(true);
        }}
      />

      <button
        class="btn btn-primary"
        type="button"
        onClick={() => {
          setCurrentTime();
          setValueChangedStatus(false);
        }}
      >
        Reset to current
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.taskTimeInput, ...ownProps };
};

export default connect(mapStateToProps, actions)(TaskTimeInput);
