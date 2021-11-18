import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/taskTitleInput";
import { addTask } from "../../redux/actions/taskList";
import { StateType } from "../../redux/storeTypes";

interface StateProps {
  value: string;
}

interface DispatchProps {
  setTaskTitle: (value: string) => void;
  resetTaskTitle: () => void;
  addTask: (title: string, id: string) => void;
}

type Props = StateProps & DispatchProps;

function TaskTitleInput({
  value,
  setTaskTitle,
  resetTaskTitle,
  addTask,
}: Props): JSX.Element {
  const [errorStatus, setErrorStatus] = useState(false);

  const pressedInput = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.target && e.charCode === 13) {
      e.preventDefault();
      if (value.length < 1) {
        setErrorStatus(true);
      } else {
        addTask(value, new Date().getTime().toString());
        resetTaskTitle();
      }
    }
  };

  return (
    <>
      <div className="form-floating">
        <textarea
          id="floatingTextarea"
          className={`form-control col-12 ${errorStatus ? "is-invalid" : ""}`}
          placeholder="Leave a task tittle here"
          autoFocus
          value={value}
          onKeyPress={pressedInput}
          onChange={(e) => setTaskTitle(e.target.value)}></textarea>

        {!errorStatus ? (
          <label htmlFor="floatingTextarea">Comments</label>
        ) : (
          <label htmlFor="floatingTextarea">Invalid input</label>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state: StateType) => {
  return { ...state.taskTitleInput };
};

const mapDispatchToProps = {
  addTask,
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTitleInput);
