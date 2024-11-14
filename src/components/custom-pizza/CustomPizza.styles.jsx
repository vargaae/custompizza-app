import styled from "styled-components";

export const CustomPizzaContainer = styled.div`
  background: #f4f4f4;
  padding: 10px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  max-width: 650px;
  margin: 0 auto;
  text-align: center;

  .topping-option input {
    padding: 2px;
  }

  .size-option.selected,
  .topping-option:hover {
    background: var(--primary-color);
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    transition: background 0.3s ease;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const CustomPizzaTitle = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

export const SizeSelector = styled.div`
  margin-bottom: 20px;
`;

export const ToppingsSelector = styled(SizeSelector)``;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SizeOptions = styled(Options)`
  justify-content: space-around;
`;

export const ToppingOptions = styled(Options)`
  justify-content: center;
  text-align: left;
  width: 100%;
`;

export const Option = styled.label`
  background: var(--secondary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

export const SizeOption = styled(Option)`
  // display: none;
`;

export const ToppingOption = styled(Option)`
  width: 100%;
`;

export const CheckAll = styled(Options)`
  justify-content: space-between;
`;

export const SummaryBox = styled(SizeSelector)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 15rem;
  background: var(--background-color);
  padding: 15px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: right;
`;

export const OrderedPizzas = styled(SizeSelector)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 10rem;
  background: var(--color-gray);
  padding: 15px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

export const TotalCost = styled.p`
  font-size: 1.2em;
  color: var(--primary-color);
  margin-top: 10px;
`;
