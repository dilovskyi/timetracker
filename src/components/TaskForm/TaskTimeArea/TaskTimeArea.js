import React, { useEffect } from "react";
import { connect } from "react-redux";
import { timeTick, setCurrentTime } from "../../../redux/actions/taskTimeArea";

import TaskTimeInput from "./TaskTimeInput/TaskTimeInput";

function TaskTimeArea({ timeTick, setCurrentTime }) {
  useEffect(() => {
    const startTimeTick = () => {
      timeTick();
      setTimeout(() => startTimeTick(), 1000);
    };

    setTimeout(() => startTimeTick(), 1000);

    return () => {
      timeTick();
    };
  }, []);

  const inputsKeys = ["hours", "minutes", "seconds"];

  return (
    <div class="input-group mb-3 justify-content-between">
      {inputsKeys.map((itemName) => {
        return <TaskTimeInput key={itemName} itemName={itemName} />;
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

const mapDispatchToProps = {
  timeTick: timeTick,
  setCurrentTime: setCurrentTime,
};

export default connect(null, mapDispatchToProps)(TaskTimeArea);
