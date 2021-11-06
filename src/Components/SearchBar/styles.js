import styled from "styled-components";

export const Wrapper = styled.form`
  position: relative;
  z-index: 9000;
  grid-area: search;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid grey;
  padding-left: 8px;

  button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;

    img {
      width: 24px;
    }
  }

  input {
    width: 70%;
    height: 70%;
    border: none;
    outline: none;
    padding-left: 8px;
    font-size: 1.07rem;
  }
`;
