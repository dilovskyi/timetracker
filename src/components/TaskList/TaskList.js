import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/taskActions";

import styled from "styled-components";

const StyledTaskList = styled.ul`
  border-radius: 5px;
  margin: 10px;
`;

const StyledAlert = styled.div`
  margin-bottom: 7px;
`;

function TaskList({ tasks }) {
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

export default connect(mapStateToProps, actions)(TaskList);
