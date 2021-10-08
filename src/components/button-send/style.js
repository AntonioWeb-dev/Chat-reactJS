import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  button {
    background: #fdb600;
    border: none;
    border-radius: 10px;
    height: 55px;
    width: 190px;
    font-weight: bold;
    font-size: 20px;
    color: white;
    transition: all 0.4s;
    :hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;
