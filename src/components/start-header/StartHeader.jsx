import { images } from "../../constants";

import {
  BannerContainer,
  BannerContent,
  ListItem,
  StartContainer,
} from "./StartHeader.styles";

const StartHeader = () => {
  const pizzas = [
    { id: 1, name: 'Margherita', ingredients: 'Tomato, Mozzarella, Basil' },
    { id: 2, name: 'Pepperoni', ingredients: 'Tomato, Mozzarella, Pepperoni' },
    { id: 3, name: 'BBQ Chicken', ingredients: 'BBQ Sauce, Chicken, Red Onions, Cilantro' },
    { id: 4, name: 'Veggie', ingredients: 'Tomato, Mozzarella, Bell Peppers, Olives, Mushrooms' },
    { id: 5, name: 'Hawaiian', ingredients: 'Tomato, Mozzarella, Ham, Pineapple' },
  ];
  return (
    <BannerContainer
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <BannerContent>
      <StartContainer>
        <h2 className="pizzamenu">Our Pizza Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <ListItem key={pizza.id}>
            <h3 className="pizzanames">{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
          </ListItem>
        ))}
      </ul>
      </StartContainer>
    </BannerContent>
    </BannerContainer>
  );
};

export default StartHeader;
