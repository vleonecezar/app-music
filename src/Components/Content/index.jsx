import React from "react";
import { useSelector } from "react-redux";
import {
  Error,
  Loading,
  Empty,
  Wrapper,
  CardsList,
  Arrow,
  Pagination,
} from "./styles";
import Card from "../Card";
import arrowIconImg from "../../Assets/arrow-icon.png";

const Content = ({
  error,
  loading,
  currentCards,
  pagesQuantity,
  handlePages,
  currentPage,
}) => {
  const player = useSelector((state) => state.playerReducer);

  if (error) return <Error className="main">{error}</Error>;
  if (loading) return <Loading className="main" />;
  if (currentCards.length === 0)
    return <Empty className="main">Nenhuma Música Aqui =(</Empty>;
  return (
    <Wrapper className="main">
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

      {pagesQuantity.length > 7 && (
        <Arrow>
          <img src={arrowIconImg} alt="arrow icon" />
        </Arrow>
      )}

      <Pagination player={player}>
        <ul>
          {pagesQuantity.map((number) => (
            <li key={number}>
              <button
                onClick={() => handlePages(number)}
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
