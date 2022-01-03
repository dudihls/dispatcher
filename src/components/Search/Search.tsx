import React from "react";
import { Icon } from "../Icon/Icon";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer, StyledInput } from "./style";
import { DropDown } from "../Dropdown/Dropdown";

interface SearchProps {
  options?: string[];
  initialValue?: string;
  onChange?: (value: string) => any;
}

export const Search: React.FC<SearchProps> = ({ onChange }) => (
  <SearchContainer>
    <Icon src={search} margin={13} color="purple" />
    <StyledInput noBorder placeholder="Search" />
    <SelectContainer>
      <DropDown
        onChange={onChange}
        initialValue={"Top Headlines"}
        noBorder
        options={["Everything", "Top Headlines"]}
      />
    </SelectContainer>
  </SearchContainer>
);
