import styled from "styled-components";

export const AudioDiv = styled.div`
  display: flex;
  align-items: center;
  #bar {
    width: 100px;
    border-bottom: #d2d7d9 2px solid;
    opacity: 1;
    position: relative;
  }
  #progress {
    position: absolute;
    border-bottom: white 2px solid;
    opacity: 2;
    animation: ${(props) =>
      props.play ? "progress-animation " + props.duration + "ms " + `forwards` : null};
    @keyframes progress-animation {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
`;
