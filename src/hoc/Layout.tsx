import styled from "styled-components";

const StyledLayout = styled.div`
  border: 2px solid #457b9d;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  background-color: #f1faee;
  @media (max-width: 575px) {
    border-radius: 0;
  }
`;

interface AuxProps {
  children: React.ReactNode;
}

function Layout({ children }: AuxProps) {
  return (
    <>
      <StyledLayout className="container">{children}</StyledLayout>
    </>
  );
}

export default Layout;
