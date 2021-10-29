import { useState } from "react";
import { Layout } from "./app.styles";
import FavoritesTittle from "./Components/FavoritesTittle";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  const [favoritesList, setFavoritesList] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesList ? <FavoritesTittle /> : <SearchBar />}
        <NavBar />
      </Layout>
    </>
  );
}

export default App;
