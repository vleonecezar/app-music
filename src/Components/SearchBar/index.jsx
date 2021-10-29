import React from "react";
import { Wrapper } from "./styles";
import searchIconImg from "../../Assets/search-icon.png";

const SearchBar = () => {
  return (
    <Wrapper>
      <button>
        <img src={searchIconImg} alt="Icone de lupa" />
      </button>
      <input type="text" placeholder="Buscar" />
    </Wrapper>
  );
};

export default SearchBar;
