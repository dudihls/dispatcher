import React from "react";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer } from "./style";
import { DropDown } from "../Dropdown/Dropdown";

interface SearchProps {
  options?: string[];
  initialValue?: string;
  onChange?: (value: string) => any;
}

export const Search: React.FC<SearchProps> = ({ onChange }) => (
  <SearchContainer>
    <Icon src={search} margin={13} color="purple" />
    <Input noBorder placeholder="Search" />
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
