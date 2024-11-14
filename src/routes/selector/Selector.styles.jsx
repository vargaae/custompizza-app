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

  background: url(${images.custompizzaFull}) no-repeat center center / cover;
  min-height: 30vh;
`;

export const SelectorContainer = styled.div`
  width: 100%;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
  font-weight: 600;

  .plus {
    height: 1.3em;
  }

  @media (max-width: 768px) {
    .background .box {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  color: var(--color-bg);
`;
