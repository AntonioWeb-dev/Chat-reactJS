import styled from "styled-components";

export const DivRoom = styled.div`
  width: 100%;
  height: 10vh;
  display: grid;
  gap: 10px;
  grid-template-columns: 15% 80%;
  justify-content: start;
  align-items: center;
  :hover {
    background: #573db8;
    cursor: pointer;
  }
  .avatar {
    padding-left: 10px;
  }
  .room-info {
    display: grid;
    span:first-child {
      font-size: 15px;
      font-family: sans-serif;
    }
    .last-message {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 10px;
        font-family: "Roboto";
      }
    }
  }
`;
