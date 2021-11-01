import { useEffect, useState } from "react";
import { Layout } from "./app.styles";
import Content from "./Components/Content";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import useAxios from "./Hooks/useAxios";
import usePagination from "./Hooks/usePagination";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { setAxiosOptions, loading, data, error } = useAxios();
  const {
    currentCards,
    currentPage,
    setCurrentPage,
    pageQuantity,
    handlePage,
    itemsPerPage,
  } = usePagination(data, favoritesScreen);

  useEffect(() => {
    if (currentCards.length + 1 < itemsPerPage) setCurrentPage(1);
  }, [currentCards, itemsPerPage, setCurrentPage]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? (
          <FavoritesTittle />
        ) : (
          <SearchBar setAxiosOptions={setAxiosOptions} />
        )}
        <NavBar
          setFavoritesScreen={setFavoritesScreen}
          setCurrentPage={setCurrentPage}
        />
        <Content
          currentCards={currentCards}
          currentPage={currentPage}
          pageQuantity={pageQuantity}
          handlePage={handlePage}
        />
      </Layout>
    </>
  );
}

export default App;
