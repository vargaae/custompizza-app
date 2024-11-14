import styled from "styled-components";

export const BackArrowContainer = styled.div`
  background-color: #142332;
  color: white;

  font-size: 2em;
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -1px;
`;

export const BackArrowTitle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2em;
  svg {
    width: 34px;
    height: 34px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  display: flex;
  align-items: center;
  gap: 30px;

  span {
    flex: 3;
  }
  .mail {
    flex: auto;
  }

  button {
    text-align: start;
  }
`;
