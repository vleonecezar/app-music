import { useEffect, useState } from "react";

const usePagination = (items) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const cardLoaded = document.querySelector(".pag");
      if (cardLoaded) {
        setClass(1);
        clearInterval(interval);
      }
    }, 300);
  }, []);

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
    setClass(number);
  }

  function setClass(number) {
    const pages = [...document.querySelectorAll(".pag")];
    pages.map((page) => {
      page.classList.remove("active");
      return Number(page.innerText) === number && page.classList.add("active");
    });
  }

  return {
    currentCards,
    pageQuantity,
    handlePage,
  };
};

export default usePagination;
