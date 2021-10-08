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
    height: 75%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Robot", sans-serif;
    color: #282829;
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
`;

export const RegisterForm = styled.form`
  z-index: 2;

  margin-left: 300px;
  background: white;
  width: 680px;
  height: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 26px 0px 0px 26px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);

  #title {
    font-size: 44px;
    font-family: "Poppins", sans-serif;
    color: #0078e7;
    padding-bottom: 55px;
  }
  .form-container {
    width: 75%;
    height: 75%;
    display: grid;
    grid-template-rows: repeat(5, 80px);
    align-items: center;
    justify-content: center;
  }
`;
