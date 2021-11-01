import { useState } from "react";
import { useSelector } from "react-redux";

const usePagination = (items, favoritesScreen) => {
  const [currentPage, setCurrentPage] = useState(1);
  const favorites = useSelector((state) => state.favoriteReducer);

  const cards = favoritesScreen ? favorites : items;
  const itemsPerPage = 12;

  const lastIndexOfPage = currentPage * itemsPerPage;
  const FirstIndexOfPage = lastIndexOfPage - itemsPerPage;
  const currentCards = cards.slice(FirstIndexOfPage, lastIndexOfPage);

  const pageQuantity = Array(Math.ceil(cards.length / itemsPerPage))
    .fill()
    .map((_, i) => i + 1);

  function handlePage(number) {
    setCurrentPage(number);
  }

  return {
    currentCards,
    currentPage,
    setCurrentPage,
    pageQuantity,
    itemsPerPage,
    handlePage,
  };
};

export default usePagination;
