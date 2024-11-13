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
  // BANNER> animation and styling
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  background: url("https://images.pexels.com/photos/19130186/pexels-photo-19130186.jpeg?auto=compress&cs=tinysrgb&w=1600")
    no-repeat center center / cover;
  min-height: 40vh;
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

export const PlusButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-bg);
`;
