import { styled, keyframes } from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  font-family: var(
    --font-family-shopinfo,
    var(--font-family, Inter, Inter Placeholder, sans-serif)
  );
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  display: flex;
  align-items: center;
`;

// Logo-float keyframes
const float = keyframes`
   0% {
     transform: translateY(0);
   }
   50% {
     transform: translateY(10px);
   }
   100% {
     transform: translateY(0px);
   }
`;

export const LogoContainer = styled(Link)`
  .logo {
    width: 50px;
    height: 40%;
    pointer-events: none;
    /* animation: ${float} infinite 3s ease-in-out; */
    @media (prefers-reduced-motion: no-preference) {
      animation: ${float} infinite 3s ease-in-out;
    }
    @media screen and (min-width: 550px) {
      height: 80%;
    }
  }
  @media screen and (min-width: 550px) {
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    width: 80px;
  }
`;

export const NavLinksContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media screen and (min-width: 550px) {
    gap: 30px;
  }
`;

export const NavLink = styled(Link)`
  line-height: 20px;
  cursor: pointer;
`;
