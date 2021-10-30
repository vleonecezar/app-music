import { useState } from "react";
import { Layout } from "./app.styles";
import Content from "./Components/Content";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [favoritesScreen, setFavoritesScreen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? <FavoritesTittle /> : <SearchBar />}
        <NavBar setFavoritesScreen={setFavoritesScreen} />
        <Content />
      </Layout>
    </>
  );
}

export default App;
