import { useState } from "react";
import { Layout } from "./app.styles";
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
      </Layout>
    </>
  );
}

export default App;
