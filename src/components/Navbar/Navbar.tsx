import React from "react";

import { Container, Logo, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Personal } from "../Personal/Personal";
import { Search } from "../Search/Search";

interface NavbarProps {
  onSubmitSearch?: (searchVal: string) => any;
}

export const Navbar: React.FC<NavbarProps> = ({ onSubmitSearch }) => (
  <Container>
    <Logo src={logo} />
    <Wrapper>
      <Search onSubmit={onSubmitSearch} />
      <Personal />
    </Wrapper>
  </Container>
);
