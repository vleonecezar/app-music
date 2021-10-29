import styled from "styled-components";

export const Wrapper = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid grey;

  > img {
    width: 150px;
    margin-top: 30px;
  }

  ul {
    margin-top: 20px;

    li {
      & + li {
        margin-top: 15px;
      }

      a {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 400;
        color: black;
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
    position: absolute;
    top: 35px;
    right: 0;
    width: 200px;
    border: none;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-bottom-left-radius: 5px;

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

        a {
          display: block;
          text-align: center;
          padding: 10px 0;
        }
      }
    }
  }
`;
