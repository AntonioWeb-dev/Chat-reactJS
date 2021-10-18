import styled from "styled-components";

export const DivRoom = styled.div`
  width: 100%;
  height: 10vh;
  display: grid;
  gap: 10px;
  grid-template-columns: 18% 70%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  .room-info {
    display: grid;
    span:first-child {
      font-size: 20px;
      font-family: sans-serif;
    }
    span:nth-child(2) {
      font-size: 15px;
      font-family: "Roboto";
    }
  }
`;
