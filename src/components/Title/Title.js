import styled from "styled-components";
import { HEADER_TITLE } from "../../constants";

const StyledTitle = styled.h1`
  text-align: center;
  color: #e63946;
  margin: 20px auto;
`;

function Title() {
  return <StyledTitle>{HEADER_TITLE}</StyledTitle>;
}

export default Title;
