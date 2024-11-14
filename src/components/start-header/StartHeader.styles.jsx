import styled, { keyframes } from "styled-components";

import { images } from "../../constants";

const cardEntrance = keyframes`
from {
    opacity: 0;
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    filter: hue-rotate(0deg);
  }
`;

export const BannerContainer = styled.div`
  // BANNER> animation and styling
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  background: url(${images.banner}) no-repeat center center / cover;
`;
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  justify-content: space-around;
`;

export const StartContainer = styled.div`
  padding: 2em;
  text-align: right;
  font-family: var(--font-family);

  @media screen and (min-width: 810px) {
    padding: calc(2vw + 1em);
  }
  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1em) 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
  }
`;

export const PizzaList = styled.div`
  color: black;
`;

export const PizzaListItem = styled.div`
  padding: 1em;
`;
