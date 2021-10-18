import styled from "styled-components";

export const RoomsDiv = styled.div`
  width: 100%;
  height: 81vh;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 9vh 100%;
  .header-room {
    padding-left: 10px;
    display: grid;
    grid-template-columns: 45px 1.5fr 0.5fr 50px;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    background: #dedfe0;

    span {
      font-size: 20px;
    }
  }
  .rooms {
    overflow: auto;
    background: white;
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
