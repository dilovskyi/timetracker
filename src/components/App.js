import styled from "styled-components";
import Layout from "../hoc/Layout";
import Title from "./Title/Title";
import TaskForm from "./TaskForm/TaskForm";

const StyledApp = styled.div`
  text-align: center;
  padding: 40px 0;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Layout>
        <Title />
        <TaskForm />
      </Layout>
    </StyledApp>
  );
}

export default App;
