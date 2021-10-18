import styled from "styled-components";

export const Container = styled.div`
  background: url("/images/SL-051919-20420-09.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainDiv = styled.div`
  background: white;
  min-width: 72%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  @media (max-width: 936px) {
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;
  }
`;
