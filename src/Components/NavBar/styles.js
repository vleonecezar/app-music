import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    position: absolute;
    z-index: 999;
    display: ${({ mobileMenu }) => (mobileMenu ? "flex" : "none")};
    align-items: flex-start;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.nav`
  grid-area: nav;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--border-color);
  background-color: var(--bg-color);

  > div {
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 25px;

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
      width: 180px;
    }

    h2 {
      text-align: center;
      font-size: 1.6rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      & + li {
        margin-top: 20px;
      }

      button {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
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
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: ${({ mobileMenu }) => (mobileMenu ? "flex" : "none")};
    position: relative;
    top: -310px;
    width: 200px;
    border: none;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-bottom-left-radius: 5px;
    height: initial;
    animation: slide 0.3s forwards;

    @keyframes slide {
      to {
        top: 50px;
      }
    }

    > div {
      margin: 0;
      &:hover {
        animation: none;
      }
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0;

      li {
        width: 100%;
        display: inline-block;
        border-top: 1px solid var(--border-color);
        & + li {
          margin: 0;
        }

        button {
          width: 100%;
          display: inline-block;
          text-align: center;
          padding: 10px 0;
        }
      }
    }
  }
`;
