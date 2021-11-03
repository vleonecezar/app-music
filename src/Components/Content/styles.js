import styled from "styled-components";

export const Wrapper = styled.main`
  grid-area: content;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
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
        display: flex;
        font-size: 1.02em;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;

        &:disabled {
          color: white;
          background: grey;
        }
      }
    }

    .active {
      background: grey;
    }
  }
`;
