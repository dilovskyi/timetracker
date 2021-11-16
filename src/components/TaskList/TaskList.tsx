import React, { useEffect } from "react";
import ListItem from "./ListItem/ListItem";
import { connect } from "react-redux";
import { setListDataFromStorage } from "../../redux/actions/taskList";
import styled from "styled-components";
import {StateType} from '../../redux/storeTypes'

const StyledTaskList = styled.ul`
  border-radius: 5px;
  margin: 15px 0;
`;

const StyledAlert = styled.div`
  margin: 0;
`;

interface taskItem {
  title: string,
  id: string,
  time: {
    hours:string | number, minutes: string | number, configurable: boolean
  }
}

type taskList = Array<taskItem> | []
 
interface StateProps {
  taskList: taskList
}

interface DispatchProps {
  setListDataFromStorage: (storageList: taskList) => void,
}

type Props = StateProps & DispatchProps

function TaskList({ taskList, setListDataFromStorage }: Props) {
  useEffect(() => {
    let jsonFromStorage: string | null = window.localStorage.getItem("tasks")
    if (jsonFromStorage && jsonFromStorage.length) {
      let storageList = JSON.parse(jsonFromStorage);
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
          <StyledAlert className="alert alert-success" role="alert">
            You have not any task!
          </StyledAlert>
        ) : (
          taskList.map(({ title, time, id }) => {
            return <ListItem title={title} time={time} id={id} key={id} />;
          })
        )}
      </StyledTaskList>
    </>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    taskList: state.taskList,
  };
};

const mapDispatchToProps = {
  setListDataFromStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
