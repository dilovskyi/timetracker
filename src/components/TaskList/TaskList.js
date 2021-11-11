import React, { useEffect } from "react";
import TaskItem from "./TaskItem/TaskItem";
import { connect } from "react-redux";
import { setListDataFromStorage } from "../../redux/actions/taskList";
import styled from "styled-components";

const StyledTaskList = styled.ul`
  border-radius: 5px;
  margin: 10px;
`;

const StyledAlert = styled.div`
  margin-bottom: 7px;
`;

function TaskList({ taskList, setListDataFromStorage }) {
  useEffect(() => {
    let storageList = JSON.parse(localStorage.getItem("tasks"));
    if (storageList && storageList.length) {
      setListDataFromStorage(storageList);
    }
  }, []);

  //FIXME: Set in storage beforeComponentUnmount
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <StyledTaskList className="list-group ">
        {taskList.length === 0 ? (
          <StyledAlert className="alert alert-primary" role="alert">
            You have not any task!
          </StyledAlert>
        ) : (
          taskList.map(({ title, time }, index) => {
            return <TaskItem title={title} time={time} key={title + index} />;
          })
        )}
      </StyledTaskList>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
  };
};

const mapDispatchToProps = {
  setListDataFromStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
