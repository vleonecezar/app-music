import { useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "./app.styles";
import Content from "./Components/Content";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import useAxios from "./Hooks/useAxios";
import usePagination from "./Hooks/usePagination";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const favorites = useSelector((state) => state.favoriteReducer);
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { setAxiosOptions, loading, data, error } = useAxios();
  const { currentCards, currentPage, pageQuantity, handlePage } = usePagination(
    data,
    favorites,
    favoritesScreen
  );

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? (
          <FavoritesTittle />
        ) : (
          <SearchBar setAxiosOptions={setAxiosOptions} />
        )}
        <NavBar setFavoritesScreen={setFavoritesScreen} />
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
