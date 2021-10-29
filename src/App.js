import { Layout } from "./app.styles";
import FavoritesTittle from "./Components/FavoritesTittle";
import SearchBar from "./Components/SearchBar";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <FavoritesTittle />
        {/* <SearchBar /> */}
      </Layout>
    </>
  );
}

export default App;
