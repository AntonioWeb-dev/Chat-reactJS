import styled from "styled-components";

export const DivMemberCard = styled.div`
  display: flex;
  gap: 10px;
  padding: 9px;
  margin-bottom: 13px;
  font-family: sans-serif;
  :hover {
    cursor: pointer;
    background: #ddd;
  }
  .avatar {
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }

  .user-info {
    display: grid;
    p {
      font-size: 18px;
      text-transform: capitalize;
    }
    span {
      color: gray;
    }
  }
`;
