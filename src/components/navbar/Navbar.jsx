import { useNavigate, Link } from "react-router-dom";

import { navigation } from "../../constants";

import { logo } from "../../assets";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./Navbar.styles";

function Navbar() {
  const navigateTo = useNavigate();

  const goHome = () => {
    navigateTo("/");
  };

  return (
    <NavigationContainer className="gradient__bg">
      <LogoContainer onClick={goHome} to="/">
        <img src={logo} className="logo" alt="logo of Andras Varga" />
      </LogoContainer>
      <NavLinksContainer>
        {navigation.map((item) => (
          <NavLink key={item.id} to={item.url}>
            {item.title}
          </NavLink>
        ))}
      </NavLinksContainer>
    </NavigationContainer>
  );
}

export default Navbar;
