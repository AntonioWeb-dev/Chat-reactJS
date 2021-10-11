import styled from "styled-components";

export const Container = styled.div`
  background: url("/images/SL-051919-20420-09.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainDiv = styled.div`
  background: white;
  min-width: 1680px;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
`;

export const Rooms = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.1);

  .header-room {
    height: 7%;
    display: grid;
    grid-template-columns: 15% 47% 20% 30px;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    background: #dedfe0;

    span {
      font-size: 20px;
    }
  }
  .rooms {
    height: 798px;
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
`;
