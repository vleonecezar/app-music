import styled from "styled-components";

export const PlayerA = styled.div`
  position: absolute;
  z-index: 9999;
  bottom: -7px;
  left: 10vw;
  animation: playerAnimation 0.7s;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80vw;
    position: absolute;
    z-index: 9999;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    padding: 0 100px;
  }

  audio {
    width: 80vw;

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
        bottom: -7px;
        transform: scale(1);
      }
    }

    &::-webkit-media-controls-panel {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;
