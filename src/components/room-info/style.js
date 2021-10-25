import styled from "styled-components";

export const DivRoomInfo = styled.div`
  height: 99.8vh;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 1fr;
  background: #f5f7f7;
  overflow: auto;
  border-left: 1px solid #f1f1f1;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #a7abab;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }

  header {
    display: grid;
    grid-template-rows: 2fr 1fr;
    align-items: center;
    justify-items: center;
    font-family: "Open sans";
    .avatar {
      display: grid;
      justify-content: center;
      padding: 20px;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .roomInfo {
      width: 90%;
      padding: 10px 0px 10px 0px;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

      h3 {
        margin-left: 10px;
      }
      p {
        margin-left: 10px;
        color: gray;
      }
    }
  }

  .align-center {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 20px;
  }
  .button-exit {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    button {
      background: #ed5151;
      color: white;
      font-size: 18px;
      font-weight: bold;
      font-family: "Open sans";
      border: none;
      border-radius: 10px;
      padding: 8px 120px 8px 120px;
    }
  }
`;

export const DivMembers = styled.div`
  width: 90%;
  display: block;
  align-items: center;
  justify-content: start;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  h3 {
    padding: 8px;
    font-family: "Open sans";
    color: gray;
  }
`;
