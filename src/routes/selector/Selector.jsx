import { BreadcrumbNav, CustomPizza, BackArrow } from "../../components";

import { BannerContainer, SelectorContainer } from "./Selector.styles";

const Selector = () => {
  const headerTitle = "Pizza Customization";

  return (
    <SelectorContainer>
      <BreadcrumbNav headerTitle={headerTitle} />
      <BannerContainer></BannerContainer>
      <CustomPizza />
      <BackArrow />
    </SelectorContainer>
  );
};

export default Selector;
