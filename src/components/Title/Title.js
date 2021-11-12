import styled from "styled-components";
import { HEADER_TITLE } from "../../constants";

const StyledTitle = styled.h1`
  text-align: center;
  color: green;
  margin: 30px auto 50px;
  font-weight: 600;
`;

function Title() {
  return <StyledTitle>{HEADER_TITLE}</StyledTitle>;
}

export default Title;
