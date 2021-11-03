import styled from "styled-components";
import play from "../../Assets/play-icon.png";
import playing from "../../Assets/playing.gif";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px 30px;
  margin: 20px 13px;
  transition: 0.2s;
  width: 280px;
  height: 450px;

  > img {
    max-width: 220px;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.03);
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
    border: 1px solid black;
    transition: 0.1s ease-out;

    img {
      /* width: 25px; */
    }

    &:active {
      box-shadow: 0 -2px 3px black, -2px 0px 3px black;
      transform: scale(0.93);
    }
  }

  .play {
    background: url(${play}) no-repeat center;
    background-size: 25px;
  }

  .playing {
    background: url(${playing}) no-repeat center;
    background-size: 25px;
    &:hover {
      background: black;
    }
  }
`;
