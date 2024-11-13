import { useNavigate } from "react-router-dom";

import {
  CheckoutItem,
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
} from "../../components";

import { images } from "../../constants";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyMessage,
  ButtonsContainer,
  ImageContainer,
} from "./Checkout.styles";

const Checkout = () => {
  const navigateTo = useNavigate();

  const goToStore = () => {
    navigateTo("#size");
  };

  return (
      <CheckoutContainer className="section__padding">
        <h1>Summary</h1>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Piece-Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {products != 0 ? (
          products.map((cartItem) => (
            <CheckoutItem key={cartItem.SKU} product={cartItem} />
          ))
        ) : (
          <EmptyMessage>
            <h2>There is no pizza in your cart?!</h2>
            <ImageContainer>
              <img
                decoding="async"
                sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                srcSet={`${images.aboutSmall} 512w, ${images.aboutMedium} 1024w, ${images.aboutLarge} 2048w, ${images.aboutXLarge} 4096w, ${images.aboutFull} 6000w`}
                src={images.aboutFull}
                alt="About us picture"
              />
            </ImageContainer>
            <h3>
              <a href="#size">
                <ButtonsContainer>
                <ButtonComponent
                  onClick={goToStore}
                  buttonType={BUTTON_TYPE_CLASSES.start}
                  type="button"
                >
                  GO UP TO BUY A PIZZA
                </ButtonComponent>
              </ButtonsContainer>
              </a>
            </h3>
          </EmptyMessage>
        )}
        {products != 0 ? (
          <>
            <Total>Total: €{cartTotalPriceCount}</Total>
          </>
        ) : null}
      </CheckoutContainer>
  );
};

export default Checkout;
