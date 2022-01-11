import React from "react";

import { Container, Logo, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Personal } from "../Personal/Personal";
import { Search } from "../Search/Search";

interface NavbarProps {
  onSubmitSearch?: (searchVal: string) => any;
  onChangeEndpoint: (endpoint: string) => any;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSubmitSearch,
  onChangeEndpoint,
}) => (
  <Container>
    <Logo src={logo} />
    <Wrapper>
      <Search onSubmit={onSubmitSearch} onChangeFilter={onChangeEndpoint} />
      <Personal />
    </Wrapper>
  </Container>
);
