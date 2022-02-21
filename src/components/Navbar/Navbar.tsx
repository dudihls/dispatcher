import React from "react";

import { Container, Logo, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Personal } from "../Personal/Personal";
import { Search } from "../Search/Search";
import { EndPointType, Option } from "../../types";

interface NavbarProps {
  onSubmitSearch: (searchVal: string) => any;
  onChangeEndpoint: (endpoint: EndPointType | Option) => any;
  onClickSearchIcon: () => any;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSubmitSearch,
  onChangeEndpoint,
  onClickSearchIcon,
}) => (
  <Container>
    <Logo src={logo} />
    <Wrapper>
      <Search onSubmit={onSubmitSearch} onChangeFilter={onChangeEndpoint} />
      <Personal onClickSearchIcon={onClickSearchIcon} />
    </Wrapper>
  </Container>
);
