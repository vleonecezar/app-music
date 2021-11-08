import { useState } from "react";
import { useSelector } from "react-redux";
import { scrollTop } from "../Helpers";

const usePagination = (songs, favoritesScreen) => {
  const [currentPage, setCurrentPage] = useState(1);
  const favoritesSongs = useSelector((state) => state.favoritesReducer);

  const cards = favoritesScreen ? favoritesSongs : songs;
  const cardsPerPage = 12;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentCards = cards.slice(firstIndex, lastIndex);

  const pagesQuantity = Array(Math.ceil(cards.length / cardsPerPage))
    .fill()
    .map((_, i) => i + 1);

  function handlePages(number) {
    setCurrentPage(number);
    scrollTop();
  }

  return {
    currentPage,
    setCurrentPage,
    cardsPerPage,
    currentCards,
    pagesQuantity,
    handlePages,
    scrollTop,
  };
};

export default usePagination;
