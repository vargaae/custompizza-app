import images from "./images";

export { images };

export const navigation = [
  {
    id: "0",
    title: "Nokia - React Test Assessment",
    url: "/",
    onlyMobile: false,
  },
  {
    id: "1",
    title: "Pizza Customisation",
    url: "/selector",
    onlyMobile: false,
  },
];

export const pizzas = [
  { id: 1, name: "Margherita", ingredients: "Tomato, Mozzarella, Basil" },
  { id: 2, name: "Pepperoni", ingredients: "Tomato, Mozzarella, Pepperoni" },
  {
    id: 3,
    name: "BBQ Chicken",
    ingredients: "BBQ Sauce, Chicken, Red Onions, Cilantro",
  },
  {
    id: 4,
    name: "Veggie",
    ingredients: "Tomato, Mozzarella, Bell Peppers, Olives, Mushrooms",
  },
  {
    id: 5,
    name: "Hawaiian",
    ingredients: "Tomato, Mozzarella, Ham, Pineapple",
  },
];
