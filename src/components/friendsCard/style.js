import styled from "styled-components";

export const DivFriend = styled.div`
  width: 100%;
  height: 7vh;
  display: grid;
  gap: 10px;
  grid-template-columns: 0.5fr 3fr;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #33569c;
  :hover {
    background: #33569c;
    cursor: pointer;
  }
  .avatar {
    padding-left: 10px;
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
`;
