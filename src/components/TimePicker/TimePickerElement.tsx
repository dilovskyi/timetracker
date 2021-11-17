import React, {useState} from "react"
import styled from "styled-components";

const StyledOption = styled.li`
width: 50px;
border: 1px solid gray;
border-radius:4px;
`

function TimePickerElement({groupClass, value, onClickTimePicker}: any) {

  return (
    <>
      <StyledOption className={`list-group-item ${groupClass}`} onClick={onClickTimePicker}>{value}</StyledOption>
    </>
  )
}

export default TimePickerElement
