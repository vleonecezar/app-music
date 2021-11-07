import React, { useRef, useState } from "react";
import { Wrapper } from "./styles";
import searchIconImg from "../../Assets/search-icon.png";
import { API_SEARCH } from "../../Services/api";

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
    setCurrentPage(1);
    setInputValue("");
    input.current.blur();
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
