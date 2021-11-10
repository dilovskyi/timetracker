import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/taskTimeArea";

function TimeInput({
  hours,
  minutes,
  seconds,
  userHours,
  userMinutes,
  userSeconds,
  timeTick,
  setUserTime,
  setCurrentTime,
}) {
  useEffect(() => {
    const startTimeTick = () => {
      timeTick({ hours, minutes, seconds });
      setTimeout(() => {
        startTimeTick();
      }, 1000);
    };
    setTimeout(() => {
      startTimeTick();
    }, 1000);
    return startTimeTick;
  }, []);

  const numWithZero = (value) => {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  const inputsArr = [
    {
      key: "hours",
      value: userHours ? userHours : hours,
    },
    {
      key: "minutes",
      value: userMinutes ? userMinutes : minutes,
    },
    {
      key: "seconds",
      value: userSeconds ? userSeconds : seconds,
    },
  ];

  return (
    <div class="input-group mb-3 justify-content-between">
      {inputsArr.map(({ key, value }) => {
        return (
          <div class="form-floating col-sm-3">
            <input
              value={numWithZero(value)}
              type="text"
              class="form-control"
              placeholder="Set time"
              aria-label="Time"
              onChange={(e) => setUserTime(key, e.target.value)}
            />
            <label for="floatingInput">Please write your task title</label>
          </div>
        );
      })}
      <button
        type="button"
        className="btn btn-primary"
        onClick={setCurrentTime}
      >
        Set current time
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.taskTimeArea;
};

export default connect(mapStateToProps, actions)(TimeInput);
