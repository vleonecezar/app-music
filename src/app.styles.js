import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "nav search"
    "nav content";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-areas:
      "search"
      "content";

    grid-template-columns: 1fr;
  }

  audio {
    position: absolute;
    z-index: 9999;
    width: 80vw;
    left: 10vw;
    bottom: 0;
  }

  audio::-webkit-media-controls-panel {
    background: rgba(0, 0, 0, 0.05);
  }
`;
