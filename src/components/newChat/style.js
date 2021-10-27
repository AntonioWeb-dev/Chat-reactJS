import styled from "styled-components";

export const DivNewChat = styled.div`
  width: 100%;
  color: white;
  .add-room {
    display: grid;
    grid-template-rows: 3fr 4fr;
    gap: 6px;
    .create-room {
      width: 93%;
      height: 100%;
      margin-left: 10px;
      border: none;
      padding: 5px;
      background: #27498c;
      border-radius: 5px;
      font-size: 17px;
      color: white;
      :hover {
        background: #33569c;

        cursor: pointer;
      }
    }
    .search-div {
      display: flex;
      width: 92%;
      height: 85%;
      background: white;
      border-radius: 5px;
      gap: 6px;
      margin-left: 10px;
      align-items: center;
      justify-content: center;
      padding-left: 3px;

      input {
        font-size: 14px;
        width: 100%;
        height: 90%;
        border-radius: 5px;
        border: none;
        outline: none;
      }
      button {
        background: none;
        border: none;
        padding-top: 7px;
        margin: 0px 4px 4px 4px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const FormRoom = styled.form`
  display: grid;
  margin-top: 13px;
  justify-content: center;
  gap: 8px;
  font-size: 19px;
  .avatar {
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    input {
      display: none;
    }
    label {
      background: #ebba34;
      padding: 4px;
      border-radius: 3px;
      font-family: "Poppins";
      font-size: 14px;
      font-weight: bold;
      :hover {
        background: #e8b21e;
      }
    }
  }
  input {
    width: 100%;
    color: #77787a;
    outline: none;
    border: none;
    background: white;
    border-radius: 6px;
    padding: 7px;
  }
  button {
    border: none;
    border-radius: 4px;
    padding: 4px;
    width: 50%;
    margin-left: 25%;
    background: #284580;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.4s;
    :hover {
      background: #0d3482;
      cursor: pointer;
      transform: translateY(-1px);
    }
  }
`;
