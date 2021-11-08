import { GlobalStyle } from "./Styles/GlobalStyles";
import { Layout, MobileMenuIcon, FavoritesTitle } from "./app.styles";
import useAxios from "./Hooks/useAxios";
import usePagination from "./Hooks/usePagination";
import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Player from "./Components/Player";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { setAxiosOptions, loading, data, error } = useAxios();
  const {
    currentPage,
    setCurrentPage,
    currentCards,
    pagesQuantity,
    handlePages,
    scrollTop,
  } = usePagination(data, favoritesScreen);

  useEffect(() => {
    if (currentCards.length === 0) setCurrentPage(1);
  }, [currentCards, setCurrentPage]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <MobileMenuIcon
          mobileMenu={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        {favoritesScreen ? (
          <FavoritesTitle>Favoritas</FavoritesTitle>
        ) : (
          <SearchBar
            setAxiosOptions={setAxiosOptions}
            setCurrentPage={setCurrentPage}
            scrollTop={scrollTop}
            setMobileMenu={setMobileMenu}
          />
        )}
        <NavBar
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          setAxiosOptions={setAxiosOptions}
          setFavoritesScreen={setFavoritesScreen}
          setCurrentPage={setCurrentPage}
          scrollTop={scrollTop}
        />
        <Content
          error={error}
          loading={loading}
          currentCards={currentCards}
          pagesQuantity={pagesQuantity}
          handlePages={handlePages}
          currentPage={currentPage}
        />
        <Player />
      </Layout>
    </>
  );
}

export default App;
