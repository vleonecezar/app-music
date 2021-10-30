import { useState } from "react";
import { Layout } from "./app.styles";
import Content from "./Components/Content";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import useAxios from "./Hooks/useAxios";
import { API_OPTIONS } from "./Services/api";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { loading, data, error } = useAxios(API_OPTIONS);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? <FavoritesTittle /> : <SearchBar />}
        <NavBar setFavoritesScreen={setFavoritesScreen} />
        <Content data={data} />
      </Layout>
    </>
  );
}

export default App;
