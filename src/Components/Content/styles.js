import styled from "styled-components";

export const Error = styled.p`
  grid-area: content;
  text-align: center;
  margin-top: 50px;
`;

export const Loading = styled.div`
  grid-area: content;
  width: 50px;
  height: 50px;
  margin: 200px auto;
  border: 10px solid var(--border-color);
  border-top-color: transparent;
  border-radius: 50%;
  animation: loading 0.6s infinite linear;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Empty = styled.p`
  grid-area: content;
  text-align: center;
  margin-top: 50px;
`;

export const Wrapper = styled.main`
  grid-area: content;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
`;

export const CardsList = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const Arrow = styled.div`
  display: none;
  justify-content: flex-end;

  > img {
    width: 25px;
    margin-right: 20px;
    animation: animeArrow 0.5s infinite alternate;

    @keyframes animeArrow {
      to {
        transform: translateX(-10px);
      }
    }
  }

  @media (max-width: 460px) {
    display: flex;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  overflow-x: auto;
  text-align: center;
  margin-top: 20px;
  margin-bottom: ${({ player }) => (player.id ? "74px" : "20px")};

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: inline-flex;
    li {
      button {
        background-color: var(--bg-color);
        display: flex;
        font-size: 1.02em;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid var(--border-color);
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;

        &:disabled {
          color: var(--bg-color);
          background: var(--border-color);
          cursor: default;
        }
      }
    }
  }
`;
