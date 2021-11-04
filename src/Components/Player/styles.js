import styled from "styled-components";

export const PlayerA = styled.audio`
  position: absolute;
  z-index: 9999;
  width: 80vw;
  left: 10vw;
  bottom: 0;
  animation: playerAnimation 0.7s;

  @keyframes playerAnimation {
    0% {
      opacity: 0.8;
      bottom: -50px;
      transform: scale(0.9);
    }
    25% {
      bottom: 10px;
    }
    100% {
      opacity: 1;
      bottom: 0;
      transform: scale(1);
    }
  }

  &::-webkit-media-controls-panel {
    background: rgba(0, 0, 0, 0.05);
  }
`;
