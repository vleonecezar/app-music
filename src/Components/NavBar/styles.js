import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    position: absolute;
    display: none;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.nav`
  grid-area: nav;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid grey;
  background: white;

  > div {
    cursor: pointer;
    margin-top: 30px;

    &:hover {
      color: red;
      animation: animePhone 0.5s;

      @keyframes animePhone {
        0% {
          transform: initial;
        }
        25% {
          transform: rotate(5deg);
        }
        50% {
          transform: rotate(-5deg);
        }
        75% {
          transform: rotate(5deg);
        }
        100% {
          transform: initial;
        }
      }
    }

    img {
      width: 150px;
    }

    h2 {
      margin-bottom: 20px;
      text-align: center;
    }
  }

  ul {
    margin-top: 20px;

    li {
      & + li {
        margin-top: 15px;
      }

      button {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 400;
        color: black;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          color: red;
        }

        img {
          width: 20px;
          margin-right: 8px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    position: relative;
    top: 50px;
    width: 200px;
    border: none;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-bottom-left-radius: 5px;
    height: initial;

    h2 {
      margin-bottom: 40px;
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0;

      li {
        display: block;
        border-top: 1px solid grey;
        & + li {
          margin: 0;
        }

        button {
          display: block;
          text-align: center;
          padding: 10px 0;
        }
      }
    }
  }
`;
