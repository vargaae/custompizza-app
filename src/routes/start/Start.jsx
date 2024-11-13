import { useNavigate } from "react-router-dom";

import {
  BUTTON_TYPE_CLASSES,
  ButtonComponent,
  StartHeader,
} from "../../components";

import { StartContainer, ButtonContainer } from "./Start.styles";

const Start = () => {
  const navigateTo = useNavigate();

  const goToPizzaSelector = () => {
    navigateTo("/selector");
  };

  return (
    <StartContainer>
      <StartHeader />
      <ButtonContainer>
        <ButtonComponent
          onClick={goToPizzaSelector}
          buttonType={BUTTON_TYPE_CLASSES.start}
          type="button"
        >
          ORDER CUSTOM PIZZA
        </ButtonComponent>
      </ButtonContainer>
    </StartContainer>
  );
};

export default Start;
