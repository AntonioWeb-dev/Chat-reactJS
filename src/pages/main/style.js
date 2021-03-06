import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainDiv = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.roomInfo ? "1fr 5fr 2fr" : "1fr 5fr")};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;
  }
`;
