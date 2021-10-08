import styled from "styled-components";

export const Container = styled.div`
  background: url("/images/SL-051919-20420-09.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  background: white;
  width: 680px;
  min-height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);

  #title {
    font-size: 44px;
    font-family: "Poppins", sans-serif;
    color: #0078e7;
    padding-bottom: 55px;
  }
  .error {
    font-family: sans-serif;
    color: #db3b3b;
  }
  .container-form {
    width: 75%;
    height: 75%;
    display: grid;
    grid-template-rows: repeat(5, 60px);
    align-items: center;
    justify-content: center;
    .remember-user {
      display: flex;
      gap: 15px;
      font-family: sans-serif;
      input {
        margin-top: 3px;
      }
    }
  }
`;
