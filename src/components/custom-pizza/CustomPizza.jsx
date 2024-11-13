import React, { useState } from 'react';
import './CustomPizza.scss'; 

const CustomPizza = () => {
  // State variables
  const [size, setSize] = useState('Medium');
  const [toppings, setToppings] = useState([]);
  
  // Prices for the sizes and toppings
  const sizePrices = { Small: 4.99, Medium: 7.99, Large: 12.99  };
  const toppingPrice = 1.00;
  const availableToppings = ['Cheese', 'Pepperoni', 'Salami', 'Bacon', 'Mushrooms', 'Onions', 'Olives'];

// Handler for size change
const handleSizeChange = (event) => {
  setSize(event.target.value);
};

// Handler for topping selection
const handleToppingChange = (event) => {
  const { value, checked } = event.target;
  setToppings((prevToppings) =>
    checked ? [...prevToppings, value] : prevToppings.filter(topping => topping !== value)
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
const totalCost = (sizePrices[size] + toppings.length * toppingPrice).toFixed(2);

return (
  <div className="pizza-app">
    <h1>🍕 Customize Your Pizza</h1>
    {/* Size Selector */}
    <div className="size-selector">
      <h3>Choose Your Size:</h3>
      <div className="size-options">
        <label className={`size-option ${size === 'Small' ? 'selected' : ''}`}>
          <input
            type="radio"
            value="Small"
            checked={size === 'Small'}
            onChange={handleSizeChange}
          />
          Small ø 24 cm ($4.99)
        </label>
        <label className={`size-option ${size === 'Medium' ? 'selected' : ''}`}>
          <input
            type="radio"
            value="Medium"
            checked={size === 'Medium'}
            onChange={handleSizeChange}
          />
          Medium ø 32 cm ($7.99)
        </label>
        <label className={`size-option ${size === 'Large' ? 'selected' : ''}`}>
          <input
            type="radio"
            value="Large"
            checked={size === 'Large'}
            onChange={handleSizeChange}
          />
          Medium ø 50 cm ($12.99)
        </label>
      </div>
    </div>

    {/* Toppings Selector */}
    <div className="toppings-selector">
      <h3>Select Your Toppings:</h3>
      <div className="checkall">
      <button onClick={checkToppings}>Select all toppings</button>
      <button onClick={uncheckToppings}>Unselect toppings</button>
      </div>
      <div className="topping-options">
        {availableToppings.map((topping, index) => (
          <label key={index} className="topping-option">
            <input
              type="checkbox"
              value={topping}
              checked={toppings.includes(topping)}
              onChange={handleToppingChange}
            /> {" "}
            {topping}
          </label>
        ))}
      </div>
    </div>

    {/* Summary Box */}
    <div className="summary-box">
      <h3>Order Summary:</h3>
      <p>
        <strong>{size}</strong> pizza, 
      </p>
      <p>
        toppings: {toppings.length > 0 ? toppings.join(', ') : 'none'}
      </p>
      <p className="total-cost">Total Cost: ${totalCost}</p>
    </div>
  </div>
);
};

export default CustomPizza;
