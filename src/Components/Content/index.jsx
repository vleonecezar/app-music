import React from "react";
import Card from "../Card";
import { Wrapper } from "./styles";

const Content = ({ currentCards, pageQuantity, handlePage }) => {
  return (
    <Wrapper>
      <ul>
        {currentCards.map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      <ul></ul>
      {/* Todo: change for a new component */}
    </Wrapper>
  );
};

export default Content;
