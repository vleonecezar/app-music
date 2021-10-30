import { useState } from "react";

const usePagination = (items) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cards = items;
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
    pageQuantity,
    handlePage,
  };
};

export default usePagination;
