import React from "react";
import { connect } from "react-redux";
import { setUserTime } from "../../../../redux/actions/taskTimeArea";

function TaskTimeInput({ itemName, autoTime, userTime, setUserTime }) {
  let currentValue = userTime[itemName] || autoTime[itemName];

  return (
    <div class="form-floating col-sm-3">
      <input
        value={currentValue}
        type="text"
        class="form-control"
        placeholder="Set time"
        aria-label="Time"
        onChange={(e) => setUserTime(itemName, e.target.value)}
      />
      <label for="floatingInput">Set {itemName}</label>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.taskTimeArea, ...ownProps };
};

const mapDispatchToProps = {
  setUserTime: setUserTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTimeInput);
