import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 9000;
  grid-area: search;

  form {
    display: flex;
    align-items: center;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
    padding-left: 8px;
    height: 100%;

    button {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: var(--bg-color);
      border: none;

      img {
        width: 22px;
      }
    }

    input {
      width: 70%;
      height: 70%;
      border: none;
      outline: none;
      padding-left: 8px;
      font-size: 1.07rem;
      background-color: var(--bg-color);

      &::placeholder {
        color: var(--border-color);
        font-size: 1.1rem;
      }
    }
  }
`;
