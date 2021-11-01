import React, { useState } from "react";
import { Wrapper } from "./styles";
import searchIconImg from "../../Assets/search-icon.png";
import { API_SEARCH } from "../../Services/api";

const SearchBar = ({ setAxiosOptions }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setAxiosOptions(API_SEARCH(inputValue));
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
        onChange={({ target }) => setInputValue(target.value)}
      />
    </Wrapper>
  );
};

export default SearchBar;
