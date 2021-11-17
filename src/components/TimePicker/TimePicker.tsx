import React, {useState} from "react"
import styled from "styled-components";

import TimePickerElement from './TimePickerElement'


const StyledTimePickerArea = styled.div`
height:150px;
`

const StyledSelect = styled.ul`
list-style: none;
width: 60px;
overflow: scroll;
`

function TimePicker() {
  const [activeHour, setActiveHour] = useState<any>();
  const [activeMinute, setActiveMinute] = useState<any>();

  const timeGeretarator = (timeAmount: number) => {
    const timeGeneratorArray = new Array(timeAmount);
    timeGeneratorArray[0] = 0;
    timeGeneratorArray.forEach((item,index) => {
      timeGeneratorArray[index + 1] = (++item);
    })
    return timeGeneratorArray;
  }

  const onClickTimePicker = (e: any) => {
    let activElementInState: any = null
    let activElementSetInState: any;
    if (e.target.classList.contains("hour-element")) {
      activElementInState = activeHour
      activElementSetInState = setActiveHour
    }
    else if (e.target.classList.contains("minute-element")) {
      activElementInState = activeMinute
      activElementSetInState = setActiveMinute
    }

    if (e.target !== activElementInState) {
      if (activElementInState) {
        activElementInState.classList.remove("active");
      }
      e.target.classList.add("active");
      activElementSetInState(e.target);
    }
  }

  return (
    <StyledTimePickerArea className="d-flex">
        <StyledSelect className="list-group"  id="timePicker">
          {timeGeretarator(23).map((value, index) => <TimePickerElement groupClass="hour-element" onClickTimePicker={onClickTimePicker} value={value} key={index + value }/>)}
        </StyledSelect>
        <StyledSelect className="list-group"  id="timePicker">
        {timeGeretarator(59).map((value, index) => <TimePickerElement groupClass="minute-element" onClickTimePicker={onClickTimePicker} value={value} key={index + value }/>)}
        </StyledSelect>
    </StyledTimePickerArea>
  )
}

export default TimePicker
