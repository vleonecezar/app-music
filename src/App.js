import { Layout } from "./app.styles";
import SearchBar from "./Components/SearchBar";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SearchBar />
      </Layout>
    </>
  );
}

export default App;
