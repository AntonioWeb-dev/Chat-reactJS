import styled from "styled-components";

export const ChatDiv = styled.div`
  width: 100%;
  height: 99.8vh;
  display: grid;
  grid-template-rows: 8vh 85.8vh 6vh;

  .header-chat {
    /* height: 9vh; */
    padding-left: 10px;
    display: grid;
    grid-template-columns: 60px 14fr 1fr;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    box-shadow: -2px 2px 7px rgba(0, 0, 0, 0.1);
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    span {
      font-size: 20px;
    }
  }
  @media (max-width: 936px) {
    grid-template-rows: 9vh 83vh 8vh;

    .header-chat {
      font-size: 1.5rem;
    }
  }
`;

export const MessagesDiv = styled.div`
  width: 100%;
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
`;
export const Message = styled.div`
  display: flex;
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  flex-direction: ${(props) => (props.sameUser ? "row-reverse" : "row")};
  .user-image {
    display: flex;
    flex-direction: column-reverse;
    img {
      object-fit: cover;
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .message-content {
    background: ${(props) => (props.sameUser ? "#407ee3" : "none")};
    margin: 3px 10px 4px 10px;
    min-height: 40px;
    max-width: 400px;
    word-wrap: break-word;
    border-radius: ${(props) => (props.sameUser ? "10px 10px 0px 10px" : "10px 10px 10px 0px")};
    text-align: ${(props) => (props.sameUser ? "end" : "initial")};
    padding: 3px;
    span {
      padding: 8px;
      font-size: 15px;
      font-weight: bold;
      color: #e3d040;
    }

    p {
      padding: 4px;
      color: ${(props) => (props.sameUser ? "white" : "#454444")};
    }
  }
`;
