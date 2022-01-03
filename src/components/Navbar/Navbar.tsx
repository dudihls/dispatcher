import React from "react";

import { Container, Logo, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Personal } from "../Personal/Personal";
import { Search } from "../Search/Search";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => (
  <Container>
    <Logo src={logo} />
    <Wrapper>
      <Search />
      <Personal />
    </Wrapper>
  </Container>
);
