import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setUserTime } from "../../../redux/actions/taskList";

import TimePickerElement from "./TimePickerElement/TimePickerElement";

import { CurrentTimeContext } from "../../TaskList/ListItem/ListItem";
import { CurrentIdContext } from "../../TaskList/ListItem/ListItem";

const StyledTimePickerArea = styled.div`
  max-height: 240px;
`;
const StyledList = styled.ul`
  list-style: none;
  overflow: scroll;
`;

function TimePicker({ setUserTime }: any) {
  const currentItemId = useContext(CurrentIdContext);
  const [currentHour, currentMinute] = useContext(CurrentTimeContext);
  const [currentHourValue, setCurrentHourValue] = useState(currentHour);
  const [currentMinuteValue, setCurrentMinuteValue] = useState(currentMinute);

  useEffect(() => {
    setUserTime(currentItemId, [currentHourValue, currentMinuteValue]);
  }, [currentHourValue, currentMinuteValue]);

  //Set state for marking item as active
  const onClickTimePicker = (e: any) => {
    if (e.target.classList.contains("hour-element")) {
      setCurrentHourValue(+e.target.textContent);
    } else if (e.target.classList.contains("minute-element")) {
      setCurrentMinuteValue(+e.target.textContent);
    }
  };

  //Generate required count of elements in list
  const timeGeretarator = (timeAmount: number) => {
    const timeGeneratorArray = new Array(timeAmount);
    timeGeneratorArray[0] = 0;
    timeGeneratorArray.forEach((item, index) => {
      timeGeneratorArray[index + 1] = ++item;
    });
    return timeGeneratorArray;
  };

  return (
    <StyledTimePickerArea className="d-flex">
      <StyledList className="list-group" id="timePicker">
        {timeGeretarator(23).map((value, index) => (
          <TimePickerElement
            groupClass="hour-element"
            onClickTimePicker={onClickTimePicker}
            activeValue={currentHourValue}
            value={value}
            key={index + value}
          />
        ))}
      </StyledList>
      <StyledList className="list-group" id="timePicker">
        {timeGeretarator(59).map((value, index) => (
          <TimePickerElement
            groupClass="minute-element"
            onClickTimePicker={onClickTimePicker}
            activeValue={currentMinuteValue}
            value={value}
            key={index + value}
          />
        ))}
      </StyledList>
    </StyledTimePickerArea>
  );
}

export default connect(null, { setUserTime })(TimePicker);
