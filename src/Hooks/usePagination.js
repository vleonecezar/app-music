import { useState } from "react";
import { useSelector } from "react-redux";

const usePagination = (songs, favoritesScreen) => {
  const [currentPage, setCurrentPage] = useState(1);
  const favoritesSongs = useSelector((state) => state.favoriteReducer);

  const cards = favoritesScreen ? favoritesSongs : songs;
  const cardsPerPage = 12;

  const lastIndex = currentPage * cardsPerPage;
  const FirstIndex = lastIndex - cardsPerPage;
  const currentCards = cards.slice(FirstIndex, lastIndex);

  const pagesQuantity = Array(Math.ceil(cards.length / cardsPerPage))
    .fill()
    .map((_, i) => i + 1);

  function handlePages(number) {
    setCurrentPage(number);
    scrollTop();
  }

  function scrollTop() {
    document.querySelector(".main").scrollTo(0, 0);
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
