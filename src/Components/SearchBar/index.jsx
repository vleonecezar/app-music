import React, { useRef, useState } from "react";
import { API_SEARCH } from "../../Services/api";
import { Wrapper } from "./styles";
import searchIconImg from "../../Assets/search-icon.png";

const SearchBar = ({
  setAxiosOptions,
  setCurrentPage,
  scrollTop,
  setMobileMenu,
}) => {
  const [inputValue, setInputValue] = useState("");
  const input = useRef();

  function handleSearch(e) {
    e.preventDefault();
    setAxiosOptions(API_SEARCH(inputValue));
    setInputValue("");
    input.current.blur();
    setCurrentPage(1);
    scrollTop();
    setMobileMenu(false);
  }

  return (
    <Wrapper onSubmit={(e) => handleSearch(e)}>
      <button>
        <img src={searchIconImg} alt="Icone de lupa" />
      </button>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        ref={input}
        onChange={() => setInputValue(input.current.value)}
      />
    </Wrapper>
  );
};

export default SearchBar;
