import styled from "styled-components";
import Layout from "../hoc/Layout";

const StyledApp = styled.div`
  text-align: center;
  padding: 40px 0;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Layout></Layout>
    </StyledApp>
  );
}

export default App;
