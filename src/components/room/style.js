import styled from "styled-components";

export const DivRoom = styled.div`
  width: 100%;
  height: 10vh;
  display: grid;
  gap: 10px;
  grid-template-columns: 0.5fr 3fr;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #33569c;
  background: ${(props) => (props.roomSelected ? "#5865f2" : "none")};
  :hover {
    background: #33569c;
    cursor: pointer;
  }
  .avatar {
    padding-left: 10px;
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .room-info {
    display: grid;
    width: 95%;
    span:first-child {
      font-size: 15px;
      font-family: sans-serif;
    }
    .last-message {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 12px;
        font-family: "Open Sans";
      }
    }
  }
`;
