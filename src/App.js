import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const player = useSelector((state) => state.playerReducer);
  const [favoritesScreen, setFavoritesScreen] = useState(false);
  const { setAxiosOptions, loading, data, error } = useAxios();
  const {
    currentCards,
    currentPage,
    setCurrentPage,
    pageQuantity,
    handlePage,
    itemsPerPage,
    scrollTop,
  } = usePagination(data, favoritesScreen);

  useEffect(() => {
    console.log(currentCards.length);
    console.log(itemsPerPage);
    if (currentCards.length === 0) setCurrentPage(1);
  }, [currentCards, itemsPerPage, setCurrentPage]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {favoritesScreen ? (
          <FavoritesTittle />
        ) : (
          <SearchBar
            setAxiosOptions={setAxiosOptions}
            setCurrentPage={setCurrentPage}
            scrollTop={scrollTop}
          />
        )}
        <NavBar
          setFavoritesScreen={setFavoritesScreen}
          setCurrentPage={setCurrentPage}
          scrollTop={scrollTop}
        />
        <Content
          currentCards={currentCards}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageQuantity={pageQuantity}
          handlePage={handlePage}
        />
        {player.id && (
          <audio
            onEnded={() => dispatch({ type: "HANDLE_PLAYER", payload: {} })}
            src={player.preview}
            controls
            autoPlay
            onPlay={({ target }) => console.log((target.volume = 0.2))}
          />
        )}
      </Layout>
    </>
  );
}

export default App;
