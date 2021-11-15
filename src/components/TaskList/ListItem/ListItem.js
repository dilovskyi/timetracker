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
  const [configStatus, setConfigStatus] = useState(time.configurable);

  useEffect(() => {
    if (configurable) {
      setTimeout(() => {
        setConfigutableStatus(id, false);
        setConfigStatus(false);
      }, 60000);
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
          disabled={!configStatus}
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
