import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  setUserTime,
  setConfigutableStatus,
} from "../../../redux/actions/taskList";

import { UserBrowserContext } from "../../App";

import TimeSetModal from "../../TimeSetModal/TimeSetModal";

const StyledInput = styled.input`
  max-width: 100px;
  border-radius: 5px;
  position: relative;
`;

interface ownProps {
  title: string;
  id: string;
  time: {
    hours: string | number;
    minutes: string | number;
    configurable: boolean;
  };
}
interface DispatchProps {
  setConfigutableStatus: (listItemId: string, flag: boolean) => void;
  setUserTime: (listItemId: string, value: Array<number | string>) => void;
}

type Props = DispatchProps & ownProps;

export const CurrentTimeContext: any = React.createContext([]);
export const CurrentIdContext: any = React.createContext("");

function ListItem({
  title,
  time,
  id,
  setConfigutableStatus,
  setUserTime,
}: Props) {
  const [displayStatus, setDisplayStatus] = useState<boolean>();

  useEffect(() => {
    if (configurable) {
      setConfigutableStatus(id, false);
    }
  }, []);

  const setUserTimeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const timeArr = e.currentTarget.value.split(":");
    setUserTime(id, timeArr);
  };

  const openModal = () => {
    setDisplayStatus(true);
  };

  const closeModal = (e: any) => {
    if (e.target.classList.contains("modal-layout")) {
      setDisplayStatus(false);
    }
  };

  const withZero = (num: number | string) => {
    if (num.toString().length < 2) {
      return "0" + num;
    }
    return num;
  };

  const { hours, minutes, configurable } = time;
  const userBrowser = useContext(UserBrowserContext);
  return (
    <>
      <li className="list-group-item d-flex  align-items-center justify-content-between">
        <div className="list-item__title">{title}</div>

        <div className="d-flex align-items-center flex-column">
          <CurrentTimeContext.Provider value={[hours, minutes]}>
            <CurrentIdContext.Provider value={id}>
              <StyledInput
                disabled={!configurable}
                type="time"
                value={withZero(hours) + ":" + withZero(minutes)}
                onChange={setUserTimeHandler}
              />

              {userBrowser !== "chrome" && (
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm mt-2"
                  onClick={openModal}
                  disabled={!configurable}>
                  Set Time
                </button>
              )}

              {displayStatus ? (
                <TimeSetModal
                  displayStatus={displayStatus}
                  closeModalHandler={closeModal}
                  value={withZero(hours) + ":" + withZero(minutes)}
                />
              ) : null}
            </CurrentIdContext.Provider>
          </CurrentTimeContext.Provider>
        </div>
      </li>
    </>
  );
}

const mapDispatchToProps = {
  setConfigutableStatus,
  setUserTime,
};

export default connect(null, mapDispatchToProps)(ListItem);
