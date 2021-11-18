import { createContext } from "react";
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

export const UserBrowserContext = createContext("");

function App() {
  function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "edge";
    } else {
      browserName = "No browser detection";
    }
    return browserName;
  }

  return (
    <StyledApp>
      <Layout>
        <UserBrowserContext.Provider value={fnBrowserDetect()}>
          <Title />
          <TaskTitleInput />
          <TaskList />
        </UserBrowserContext.Provider>
      </Layout>
    </StyledApp>
  );
}

export default App;
