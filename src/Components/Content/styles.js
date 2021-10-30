import styled from "styled-components";

export const Wrapper = styled.main`
  grid-area: content;
  overflow-y: scroll;

  ul {
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
    li {
      margin: 15px;
      border: 1px solid black;
      width: 300px;
      min-height: 300px;
    }
  }
`;
