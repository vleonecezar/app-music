import { useState } from "react";
import { Layout } from "./app.styles";
import Content from "./Components/Content";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import useAxios from "./Hooks/useAxios";
import usePagination from "./Hooks/usePagination";
import { API_TOP_WORLD } from "./Services/api";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { loading, data, error } = useAxios(API_TOP_WORLD);
  const { currentCards, pageQuantity, handlePage } = usePagination(data);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? <FavoritesTittle /> : <SearchBar />}
        <NavBar setFavoritesScreen={setFavoritesScreen} />
        <Content
          currentCards={currentCards}
          pageQuantity={pageQuantity}
          handlePage={handlePage}
        />
      </Layout>
    </>
  );
}

export default App;
