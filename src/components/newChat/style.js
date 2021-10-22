import styled from "styled-components";

export const DivNewChat = styled.div`
  width: 100%;
  color: white;
  .add-room {
    display: grid;
    grid-template-rows: 3fr 4fr;
    gap: 6px;
    .create-room {
      width: 93%;
      height: 100%;
      margin-left: 10px;
      border: none;
      padding: 5px;
      background: #27498c;
      border-radius: 5px;
      font-size: 17px;
      color: white;
      :hover {
        background: #33569c;

        cursor: pointer;
      }
    }
    .search-div {
      display: flex;
      width: 92%;
      height: 85%;
      background: white;
      border-radius: 5px;
      gap: 6px;
      margin-left: 10px;
      align-items: center;
      justify-content: center;
      padding-left: 3px;

      input {
        font-size: 14px;
        width: 100%;
        height: 90%;
        border-radius: 5px;
        border: none;
        outline: none;
      }
      button {
        background: none;
        border: none;
        padding-top: 7px;
        margin: 0px 4px 4px 4px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
