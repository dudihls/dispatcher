import React, { useEffect } from "react";
import { DropDown, DropDownProps } from "../Dropdown/Dropdown";
import { Select, SelectProps } from "../Dropdown/Select/Select";
import { StyledContainer } from "./style";

interface DesktopFilterProps {
  dropdowns: DropDownProps[];
}

export const DesktopFilter: React.FC<DesktopFilterProps> = ({ dropdowns }) => {
  return (
    <StyledContainer>
      {dropdowns.map((props, idx) => (
        <DropDown key={idx} {...props} />
      ))}
    </StyledContainer>
  );
};
