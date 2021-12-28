import React from "react";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import search from "../../assets/Icons/search.svg";
import settings from "../../assets/Icons/settings.svg";
import notifications from "../../assets/Icons/notifications.svg";
import { Container, EndContainer, IconContainer, Logo, SearchContainer } from "./style";
import logo from "../../assets/imgs/logo.png";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => (
  <Container>
    <Logo src={logo} />
    <SearchContainer>
      <IconContainer h={24} w={24} margin={13}>
        <Icon src={search} color="purple" />
      </IconContainer>
      <Input noBorder placeholder="Search" />
    </SearchContainer>
       <EndContainer>
           <IconContainer h={24} w={24} ml={14}>
            <Icon src={settings}/>
           </IconContainer>
           <IconContainer h={24} w={24} ml={14}>
            <Icon src={notifications}/>
           </IconContainer>
            {/* //TODO */}
            {/* <Avatar/>  */}
         </EndContainer>
  </Container>
);
