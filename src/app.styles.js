import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "nav search"
    "nav content";
  grid-template-columns: 250px 1fr;
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
`;

export const MobileMenuIcon = styled.div`
  position: absolute;
  z-index: 9999;
  display: none;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: var(--border-color);

  &:after {
    content: "";
    display: block;
    width: ${({ mobileMenu }) => (mobileMenu ? "4px" : "23px")};
    height: ${({ mobileMenu }) => (mobileMenu ? "4px" : "3px")};
    border-radius: 5px;
    background: black;
    box-shadow: 0 -7px black, 0 7px black;
    transition: 0.3s;

    ${({ mobileMenu }) => mobileMenu && "transform: rotate(90deg);"}
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const FavoritesTitle = styled.h2`
  position: relative;
  z-index: 9000;
  background-color: var(--bg-color);
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 1.35rem;
  font-weight: 400;
`;
