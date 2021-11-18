import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  width: 100px;
  border: 1px solid gray;
  border-radius: 4px;
`;

function TimePickerElement({
  groupClass,
  value,
  onClickTimePicker,
  activeValue,
}: any) {
  return (
    <>
      <StyledListItem
        className={`list-group-item ${groupClass} ${
          activeValue === value ? "active" : null
        }`}
        onClick={(e) => {
          onClickTimePicker(e);
        }}>
        {value}
      </StyledListItem>
    </>
  );
}

export default TimePickerElement;
