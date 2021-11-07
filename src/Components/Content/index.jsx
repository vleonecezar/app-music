import React from "react";
import Card from "../Card";
import {
  Wrapper,
  CardsList,
  Pagination,
  Arrow,
  Error,
  Loading,
  Empty,
} from "./styles";
import arrowImg from "../../Assets/arrow-icon.png";
import { useSelector } from "react-redux";

const Content = ({
  currentCards,
  currentPage,
  pageQuantity,
  handlePage,
  error,
  loading,
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
      {pageQuantity.length > 7 && (
        <Arrow>
          <img src={arrowImg} alt="arrow icon" />
        </Arrow>
      )}
      <Pagination player={player}>
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
