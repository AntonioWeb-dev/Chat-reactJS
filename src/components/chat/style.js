import styled from "styled-components";

export const ChatDiv = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #b6b7b8;

  .header-chat {
    height: 7%;
    display: grid;
    grid-template-columns: 5% 87% 3%;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    background: #dedfe0;

    span {
      font-size: 20px;
    }
  }
`;
