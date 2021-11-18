import React from "react";
import TimePicker from "./TimePicker/TimePicker";
import styled from "styled-components";

const ModalLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledModal = styled.div`
  position: absolute;
  overflow: scroll;
  border-radius: 10px;
  z-index: 5;
`;
function TimeSetModal({ displayStatus, closeModalHandler }: any) {
  return (
    <StyledModal className={`${displayStatus ? "d-block" : "d-none"}`}>
      <ModalLayout className="modal-layout" onClick={closeModalHandler}>
        <TimePicker />
      </ModalLayout>
    </StyledModal>
  );
}

export default TimeSetModal;
