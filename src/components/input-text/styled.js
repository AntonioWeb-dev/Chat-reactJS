import styled from "styled-components";

export const DivInput = styled.div`
  display: grid;
  label {
    font-family: sans-serif;
    font-size: 15px;
    color: gray;
    padding: 10px 0px 5px 5px;
  }
  input {
    width: 300px;
    height: 25px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    padding: 3px;
  }
  input:focus {
    border-bottom: 1px solid #fdb600;
  }
`;
