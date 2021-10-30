import styled from "styled-components";

export const Wrapper = styled.main`
  grid-area: content;
  overflow-y: scroll;

  ul {
    padding: 8px 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
  }
`;
