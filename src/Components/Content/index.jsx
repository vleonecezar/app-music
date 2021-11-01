import React from "react";
import Card from "../Card";
import { Wrapper, CardsList, Pagination, Arrow } from "./styles";
import arrowImg from "../../Assets/arrow-icon.png";

const Content = ({ currentCards, currentPage, pageQuantity, handlePage }) => {
  return (
    <Wrapper>
      {
        <CardsList>
          <ul>
            {currentCards.map((card) => (
              <li key={card.id}>
                <Card card={card} />
              </li>
            ))}
          </ul>
        </CardsList>
      }
      <Arrow>
        <img src={arrowImg} alt="arrow icon" />
      </Arrow>
      <Pagination>
        <ul>
          {pageQuantity.map((number) => (
            <li key={number}>
              <button
                onClick={() => handlePage(number)}
                disabled={number === currentPage}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </Pagination>
    </Wrapper>
  );
};

export default Content;
