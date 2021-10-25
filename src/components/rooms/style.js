import styled from "styled-components";

// when the props newChat is true the first value will be the valid value
export const RoomsDiv = styled.div`
  width: 100%;
  height: 99.8vh;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: ${(props) => (props.newChat ? "90px 10fr" : "1fr 6fr")};
  background-image: linear-gradient(#4267b2, #5865f2);
  color: white;
  border-radius: 0px 15px 15px 0px;
  .header-room {
    font-family: "Open sans";
    display: ${(props) => (props.newChat ? "flex" : "grid")};
    grid-template-rows: ${(props) => (props.newChat ? "0.7fr" : "1fr 0.5fr")};
    align-items: center;
    .user-header {
      width: ${(props) => (props.newChat ? "100%" : "96%")};
      padding-left: 10px;
      display: grid;
      grid-template-columns: 55px 1.5fr 50px 50px;
      align-items: center;
      span {
        font-size: 25px;
        text-transform: capitalize;
        padding: 8px;
      }
      .avatar {
        img {
          object-fit: cover;
          width: 55px;
          height: 55px;
          border-radius: 50%;
        }
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
  @media (max-width: 1024px) {
    display: none;
  }
`;
