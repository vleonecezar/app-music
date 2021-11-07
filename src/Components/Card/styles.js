import styled from "styled-components";
import play from "../../Assets/play-icon.png";
import stop from "../../Assets/stop-icon.png";
import playing from "../../Assets/playing.gif";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 15px 30px;
  margin: 20px 13px;
  transition: 0.2s;
  width: 280px;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.02);

  > img {
    max-width: 220px;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: 1px 1px 4px var(--border-color),
      -1px 1px 4px var(--border-color);
    background-color: transparent;
  }

  animation: slideInFromLeft 0.3s;

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 800px) {
    &:hover {
      box-shadow: none;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 8px;

    &:first-child {
      font-weight: 600;
      font-size: 1.05rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 25px;

  a,
  button {
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    transition: 0.1s ease-out;
    background-color: var(--bg-color);

    img {
      width: 25px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
      box-shadow: 0 -2px 3px var(--border-color),
        -2px 0px 3px var(--border-color);
      transform: scale(0.93);
    }
  }

  .play {
    background: url(${play}) no-repeat center;
    background-color: var(--bg-color);
    transition: none;
    background-size: 25px;
  }

  .playing {
    transition: none;
    background: url(${stop}) no-repeat center center;
    background-size: 22px;

    @media (min-width: 800px) {
      background: url(${playing}) no-repeat center center;
      background-size: 40px;

      &:hover {
        background: url(${stop}) no-repeat center center;
        background-color: var(--bg-color);
        background-size: 22px;
      }
    }
  }

  @media (max-width: 800px) {
    a:hover,
    button:hover {
      background-color: var(--bg-color);
    }
  }
`;
