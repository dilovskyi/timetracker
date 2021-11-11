import React, { useEffect } from "react";
import TaskItem from "./TaskItem/TaskItem";
import { connect } from "react-redux";
import { setListDataFromStorage } from "../../redux/actions/taskActions";

import styled from "styled-components";

const StyledTaskList = styled.ul`
  border-radius: 5px;
  margin: 10px;
`;

const StyledAlert = styled.div`
  margin-bottom: 7px;
`;

function TaskList({ tasks, setListDataFromStorage }) {
  useEffect(() => {
    let storageList = JSON.parse(localStorage.getItem("tasks"));
    if (storageList && storageList.length) {
      console.log(1);
      setListDataFromStorage(storageList);
    }
  }, []);

  //FIXME: Set in storage beforeComponentUnmount
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <StyledTaskList className="list-group ">
        {tasks.length === 0 ? (
          <StyledAlert className="alert alert-primary" role="alert">
            You have not any task!
          </StyledAlert>
        ) : (
          tasks.map(({ title, time }, index) => {
            return <TaskItem title={title} time={time} key={title + index} />;
          })
        )}
      </StyledTaskList>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  setListDataFromStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
