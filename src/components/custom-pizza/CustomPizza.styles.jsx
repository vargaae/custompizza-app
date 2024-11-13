import styled from "styled-components";

export const CustomPizzaContainer = styled.div`
  background: #f4f4f4;
  padding: 10px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: var(--primary-color);
    margin-bottom: 20px;
  }

  .size-selector,
  .toppings-selector,
  .summary-box {
    margin-bottom: 20px;
  }

  .size-options {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .topping-options {
    display: flex;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
  }

  .size-option,
  .topping-option {
    background: var(--secondary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .topping-option {
    width: 100%;
  }

  .size-option input {
    display: none;
  }

  .topping-option input {
    padding: 2px;
  }

  .size-option.selected,
  .topping-option:hover {
    background: var(--primary-color);
  }

  .checkall {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .summary-box {
    background: var(--background-color);
    padding: 15px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    text-align: right;
  }

  .total-cost {
    font-size: 1.2em;
    color: var(--primary-color);
    margin-top: 10px;
  }
`;

export const CheckoutHeader = styled.div``;

export const HeaderBlock = styled.div``;

export const Total = styled.span``;

export const PaymentFormContainer = styled.div``;

export const FormContainer = styled.form``;

export const ButtonContainer = styled.div``;

export const ButtonsContainer = styled.div``;

export const EmptyMessage = styled.div``;
