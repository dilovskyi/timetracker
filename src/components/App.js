import styled from "styled-components";
import Layout from "../hoc/Layout";
import Title from "./Title/Title";
import TaskTitleInput from "./TaskTitleInput/TaskTitleInput";
import TaskList from "./TaskList/TaskList";

const StyledApp = styled.div`
  text-align: center;
  padding: 40px 0;
  height: 100%;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

function App() {
  return (
    <StyledApp>
      <Layout>
        <Title />
        <TaskTitleInput />
        <TaskList />
      </Layout>
    </StyledApp>
  );
}

export default App;
