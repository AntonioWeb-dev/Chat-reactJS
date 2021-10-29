import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");
  min-width: 1128px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(#bfdbf7, white);
  .header {
    width: 100%;
    display: flex;
    .menu {
      margin: 45px 0px 0px 15%;
      display: flex;
      width: 35%;
    }

    #title {
      font-size: 44px;
      font-family: "Poppins", sans-serif;
      color: #0078e7;
    }
    // login button
    .login-button {
      margin: 50px 0px 0px 23%;
    }
    .login-button button {
      background: #0078e7;
      border: none;
      width: 144px;
      height: 38px;
      border-radius: 23px;
      box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
      :hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
    .login-button button a {
      font-family: "Poppins", sans-serif;
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
  #main-image {
    animation-name: fadeInImage;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    @keyframes fadeInImage {
      from {
        margin-left: 500px;
        opacity: 0;
      }
      to {
        margin-left: 0px;
        opacity: 1;
      }
    }
  }
  .main {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 3px;
  }
  .apresentation {
    width: 66%;
    margin-right: 50px;
    display: flex;
    justify-content: space-between;

    .main-phrase {
      padding-top: 60px;
      color: #595a5c;
      font-size: 45px;
      width: 550px;
      font-weight: bold;
      font-family: "Poppins", sans-serif;

      animation-name: fadeInMainPhrase;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      @keyframes fadeInMainPhrase {
        from {
          margin-top: 100px;
          opacity: 0;
        }
        to {
          margin-top: 0px;
          opacity: 1;
        }
      }
    }
    .main-phrase span {
      font-size: 22px;
      color: #8c8787;
      font-weight: normal;
    }

    .button-start {
      margin-top: 25px;
      background: #fdb600;
      border: none;
      border-radius: 28px;

      width: 261px;
      height: 50px;
      transition: all 0.4s;
      :hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
    .button-start a:active,
    .button-start a {
      text-decoration: none;
      color: #525652;
      font-weight: bold;
      font-size: 24px;
      padding-left: 10px;
    }
  }
`;

export const Li = styled.li`
  transition: all 0.6s;
  border-bottom: ${(props) => (props.selected ? "2px solid #fdb600 " : "0px solid black")};
`;
