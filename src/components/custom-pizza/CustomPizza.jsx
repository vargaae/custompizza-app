import { useState, useEffect } from "react";

import {
  CheckAll,
  CustomPizzaContainer,
  CustomPizzaTitle,
  OrderedPizzas,
  SizeOption,
  SizeOptions,
  SizeSelector,
  SummaryBox,
  ToppingOption,
  ToppingOptions,
  ToppingsSelector,
  TotalCost,
} from "./CustomPizza.styles";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button-component/ButtonComponent";
import { sizes } from "../../constants";

const CustomPizza = () => {
  const [size, setSize] = useState("Medium");
  const [toppings, setToppings] = useState([]);
  const [orders, setOrders] = useState([]);

  // Prices for the sizes and toppings
  const sizePrices = { Small: 4.99, Medium: 7.99, Large: 12.99 };
  const toppingPrice = 1.0;
  const availableToppings = [
    "Cheese",
    "Pepperoni",
    "Salami",
    "Bacon",
    "Mushrooms",
    "Onions",
    "Olives",
  ];

  // Load orders from localStorage when the component mounts
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // Save orders to localStorage
  const saveOrdersToLocalStorage = (newOrders) => {
    localStorage.setItem("orders", JSON.stringify(newOrders));
  };

  // Handler for size change
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // Handler for topping selection
  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    setToppings((prevToppings) =>
      checked
        ? [...prevToppings, value]
        : prevToppings.filter((topping) => topping !== value)
    );
  };

  // Uncheck topping
  const uncheckToppings = () => {
    setToppings([]);
  };

  // Check all toppings
  const checkToppings = () => {
    setToppings(availableToppings);
  };

  // Calculate the total cost
  const totalCost = (sizePrices[size] + toppings.length * toppingPrice).toFixed(
    2
  );

  // Place order and save it to localStorage
  const handlePlaceOrder = () => {
    const newOrder = { size, toppings, totalCost };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    saveOrdersToLocalStorage(updatedOrders);
    setSize("Medium");
    setToppings([]);
  };

  // Delete a specific order
  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    saveOrdersToLocalStorage(updatedOrders);
  };

  // Clear all orders
  const handleClearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <CustomPizzaContainer>
      <CustomPizzaTitle>🍕 Customize Your Pizza</CustomPizzaTitle>

      {/* Size Selector */}
      <SizeSelector>
        <h3>Choose Your Size:</h3>
        <SizeOptions>
          {sizes.map((pizzasize) => (
            <SizeOption
              key={pizzasize.id}
              className={`size-option ${
                size === pizzasize.name ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                value={pizzasize.name}
                checked={size === pizzasize.name}
                onChange={handleSizeChange}
              />
              {pizzasize.title}
            </SizeOption>
          ))}
        </SizeOptions>
      </SizeSelector>

      {/* Toppings Selector */}
      <ToppingsSelector>
        <h3>Select Your Toppings:</h3>
        <CheckAll>
          <button onClick={checkToppings}>Select all toppings</button>
          <button onClick={uncheckToppings}>Unselect toppings</button>
        </CheckAll>
        <ToppingOptions>
          {availableToppings.map((topping, index) => (
            <ToppingOption key={index} className="topping-option">
              <input
                type="checkbox"
                value={topping}
                checked={toppings.includes(topping)}
                onChange={handleToppingChange}
              />
              {"  "}
              {topping}
            </ToppingOption>
          ))}
        </ToppingOptions>
      </ToppingsSelector>

      {/* Summary Box */}
      <SummaryBox>
        <h3>Order Summary:</h3>
        <p>
          <strong>{size}</strong> pizza,
        </p>
        <p>Toppings: {toppings.length > 0 ? toppings.join(", ") : "none"}</p>
        <p>${sizePrices[size]}</p>
        {toppings.length > 0 ? (
          <p>
            + {toppings.length} x ${toppingPrice}
          </p>
        ) : null}
        <TotalCost>Total Cost: ${totalCost}</TotalCost>

        <ButtonComponent
          onClick={handlePlaceOrder}
          buttonType={BUTTON_TYPE_CLASSES.start}
        >
          Place Order
        </ButtonComponent>
      </SummaryBox>

      {/* Ordered Pizzas Box */}
      <OrderedPizzas className="ordered-pizzas">
        <h3>Ordered Pizzas:</h3>
        {orders.length > 0 ? (
          orders &&
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <div>
                {order.size} pizza with{" "}
                {order.toppings.length > 0 ? order.toppings.join(", ") : "none"}{" "}
                - ${order.totalCost}{" "}
                <ButtonComponent
                  onClick={() => handleDeleteOrder(index)}
                  buttonType={BUTTON_TYPE_CLASSES.delete}
                >
                  x
                </ButtonComponent>
              </div>
            </div>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
        <button onClick={handleClearOrders}>Clear All Orders</button>
      </OrderedPizzas>
    </CustomPizzaContainer>
  );
};

export default CustomPizza;
