import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/timeLabel";

function TaskTimeInput({
  itemName,
  hours,
  minutes,
  seconds,
  setUserTime,
  setCurrentTime,
  timeRef,
}) {
  const [inputFocusStatus, setInputFocusStatus] = useState(false);
  const [valueChangedStatus, setValueChangedStatus] = useState(false);
  const [loop, setLoop] = useState(null);

  return (
    <>
      <input
        ref={timeRef}
        onFocus={() => setInputFocusStatus(true)}
        onBlur={() => setInputFocusStatus(false)}
        value={hours + ":" + minutes + ":" + seconds}
        type="text"
        className="form-control col-12 col-lg-6"
        placeholder="Set time"
        aria-label="Time"
        onChange={(e) => {
          const value = e.target.value.split(":");

          const newVal = value.map((item) => {
            if (item.length >= 3) {
              return item.slice(0, 2);
            } else if (!item) {
              return "0";
            }
            return item;
          });

          setUserTime(itemName, newVal);
          setValueChangedStatus(true);
        }}
      />

      <button
        className="btn btn-secondary col-12 col-lg-6"
        type="button"
        onClick={() => {
          setCurrentTime();
          setValueChangedStatus(false);
        }}
      >
        Reset to current
      </button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.taskTimeInput, ...ownProps };
};

export default connect(mapStateToProps, actions)(TaskTimeInput);
