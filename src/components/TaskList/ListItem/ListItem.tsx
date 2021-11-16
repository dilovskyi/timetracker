import React, { useEffect } from "react";
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

interface ownProps {
  title: string,
  id: string,
  time: {
    hours: string | number, minutes: string | number, configurable: boolean;
  };
}

interface StateProps {
}

interface DispatchProps {
  setConfigutableStatus: (listItemId: string, flag: boolean) => void;
  setUserTime: (listItemId: string, value: Array<number | string>) => void;
}

type Props = StateProps & DispatchProps & ownProps

function ListItem({ title, time, id, setConfigutableStatus, setUserTime }:Props) {
  const { hours, minutes, configurable } = time;

  useEffect(() => {
    if (configurable) {
      setConfigutableStatus(id, false);
    }
  }, []);

  const setUserTimeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const timeArr = e.currentTarget.value.split(":");
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
