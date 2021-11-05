import styled from "styled-components";

export const SendMessage = styled.form`
  width: 100%;
  background: #ddd;
  /* height: 5%; */
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  input {
    height: 40%;
    width: 78%;
    border-radius: 26px;
    outline: none;
    padding: 10px;
    border: #ddd solid 2px;
    margin-right: 1%;
  }
  button {
    border: none;
    background: none;

    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 936px) {
    width: 100%;
    gap: 14px;
    input {
      padding: 5px;
    }
  }
`;
