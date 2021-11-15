import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  setUserTime,
  setConfigutableStatus,
} from "../../../redux/actions/taskList";

const StyleTimeInput = styled.input`
  max-width: 100px;
  border-radius: 5px;
`;

function ListItem({ title, time, id, setConfigutableStatus, setUserTime }) {
  const { hours, minutes, configurable } = time;

  useEffect(() => {
    if (configurable) {
      setConfigutableStatus(id, false);
    }
  }, []);

  const setUserTimeHandler = (e) => {
    const timeArr = e.target.value.split(":");
    setUserTime(id, timeArr);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div role="list-item__title">{title}</div>
        <StyleTimeInput
          disabled={!configurable}
          type="time"
          value={`${hours}:${minutes}`}
          onChange={setUserTimeHandler}
        />
      </li>
    </>
  );
}

const mapDispatchToProps = {
  setConfigutableStatus,
  setUserTime,
};

export default connect(null, mapDispatchToProps)(ListItem);
