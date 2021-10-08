import styled from "styled-components";

export const DivRoom = styled.div`
  width: 100%;
  height: 7%;
  display: grid;
  grid-template-columns: 18% 70%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
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
