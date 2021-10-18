import styled from "styled-components";

export const SendMessage = styled.form`
  width: 100%;

  /* height: 5%; */
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  input {
    height: 40%;
    width: 88%;
    border-radius: 26px;
    outline: none;
    padding: 10px;
    border: #ddd solid 2px;
    margin-bottom: 9px;
  }
  button {
    border: none;
    background: none;
    margin-bottom: 5px;

    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 936px) {
    width: 97%;
    gap: 14px;
    input {
      padding: 5px;
    }
  }
`;
