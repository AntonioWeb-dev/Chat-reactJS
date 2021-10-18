import styled from "styled-components";

export const ChatDiv = styled.div`
  width: 100%;
  border-left: 1px solid #d1d1d1;
  max-height: 100%;
  display: grid;
  grid-template-rows: 9vh 75vh 5vh;

  .header-chat {
    /* height: 9vh; */
    padding-left: 10px;
    display: grid;
    grid-template-columns: 60px 8fr 1fr;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    background: #dedfe0;

    span {
      font-size: 20px;
    }
  }
  @media (max-width: 936px) {
    grid-template-rows: 9vh 81vh 9vh;

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
  flex-direction: ${(props) => (props.sameUser ? "row-reverse" : "row")};

  .message-content {
    background: ${(props) => (props.sameUser ? "#71b0eb" : "#9ff5d5")};
    margin: 6px 18px 7px 18px;
    min-height: 40px;
    max-width: 200px;
    word-wrap: break-word;
    border-radius: 4px;
    text-align: ${(props) => (props.sameUser ? "end" : "initial")};
    span {
      padding: 8px;
      font-size: 15px;
      font-weight: bold;
      color: #ed133b;
    }

    p {
      padding: 4px;
    }
  }
`;
