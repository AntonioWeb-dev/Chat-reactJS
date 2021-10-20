import styled from "styled-components";

export const RoomsDiv = styled.div`
  width: 100%;
  height: 100vh;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 1fr 6fr;
  background: #6b4bde;
  color: white;
  .header-room {
    font-family: "Open sans";
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    .user-header {
      padding-left: 10px;
      display: grid;
      grid-template-columns: 55px 1.5fr 50px 50px;
      align-items: center;
      span {
        font-size: 20px;
      }
    }
    .search-div {
      display: flex;
      width: 93%;
      height: 85%;

      background: white;
      border-radius: 5px;
      gap: 6px;
      margin-left: 10px;
      align-items: center;
      justify-content: center;
      input {
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
  .rooms {
    height: auto;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #bdbbbb;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #bdbbbb;
    }
  }
  @media (max-width: 936px) {
    display: none;
  }
`;
