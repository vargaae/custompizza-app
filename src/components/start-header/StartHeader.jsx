import { images, pizzas } from "../../constants";

import {
  BannerContainer,
  BannerContent,
  PizzaList,
  PizzaListItem,
  StartContainer,
} from "./StartHeader.styles";

const StartHeader = () => {
  return (
    <BannerContainer
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <BannerContent>
        <StartContainer>
          <h2 className="pizzamenu">Our Pizza Menu</h2>
          <PizzaList>
            {pizzas.map((pizza) => (
              <PizzaListItem key={pizza.id}>
                <h3 className="pizzanames">{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
              </PizzaListItem>
            ))}
          </PizzaList>
        </StartContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default StartHeader;
