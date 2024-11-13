import styled, { keyframes } from "styled-components";

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
  // BANNER>CAROUSEL animation and styling
  /* background-color: rgb(36, 243, 147); */
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  /* banner styles:
  background-image: url(./); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 65vh;

  /* @media screen and (min-width: 1200px) {
    height: calc(100vh - 110px);
  } */
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

  .pizzamenu {
    font-size: 1.8rem;
    font-weight: 800;
  }
  .pizzanames {
    font-size: 1.5rem;
    font-weight: 800;
  }

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

export const ListItem = styled.div`
  padding: 1em;
`;
