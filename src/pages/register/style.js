import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
  background: url("/images/SL-051919-20420-09.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  #info {
    z-index: 2;
    background: #0078e7;
    width: 680px;
    height: 844px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Robot", sans-serif;
    color: white;
    .login-button {
      margin: 30px 0px 0px 0px;
    }
    .login-button button {
      background: #fdb600;
      border: none;
      width: 164px;
      height: 48px;
      border-radius: 10px;

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
  @media (max-width: 890px), (max-height: 770px) {
    background: white;

    #info {
      display: none;
    }
  }
`;

export const RegisterForm = styled.form`
  z-index: 2;

  margin-left: 150px;
  background: white;
  width: 680px;
  height: 755px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 26px 0px 0px 26px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);

  #title {
    font-size: 44px;
    font-family: "Poppins", sans-serif;
    color: #0078e7;
    padding-bottom: 25px;
    text-align: center;
  }
  .form-container {
    width: 75%;
    height: 90%;
    display: grid;
    grid-template-rows: 20px 170px repeat(5, 1fr);
    align-items: center;
    justify-content: center;

    .error {
      font-family: sans-serif;
      color: #db3b3b;
      margin: 8px;
    }
  }
  // responsive
  @media (max-width: 890px), (max-height: 770px) {
    width: 780px;
    height: 100%;
    margin-left: 0px;

    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0);
    .form-container {
      align-items: center;
      justify-content: start;
      height: 70%;
      width: 88%;
      #title {
        grid-area: title;
      }
      .name {
        grid-area: name;
      }
      .email {
        grid-area: email;
      }
      .pwd {
        grid-area: pwd;
      }
      .confirm-pwd {
        grid-area: confirm-pwd;
      }
      .avatar {
        grid-area: avatar;
        width: 150px;
        margin-bottom: 40px;
      }
      .button-send {
        grid-area: button-send;
        margin-left: 110px;
      }
      grid-template-columns: repeat(auto-fill, 200px);
      grid-template-areas:
        "title title title"
        "avatar name email"
        "avatar pwd confirm-pwd"
        "avatar pwd confirm-pwd"
        "avatar button-send button-send";
    }
  }

  // avatar icon
  .avatar {
    width: 300px;
    height: 62%;
    display: grid;
    gap: 15px;
    align-items: center;
    justify-content: center;

    #avatar-icon {
      margin-left: 3px;
    }

    input[type="file"] {
      display: none;
    }
    label {
      cursor: pointer;
      background: #82aefa;
      padding: 7px;
      border-radius: 10px;
      font-family: "Poppins", sans-serif;
      color: white;
    }
  }
`;
