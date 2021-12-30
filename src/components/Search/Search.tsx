import React from "react";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer } from "./style";
import { Select } from "../Dropdown/Select/Select";
import { Spacer } from "../Spacer/Spacer";

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
      <Select
        onChange={onChange}
        initialValue={"Top Headlines"}
        noBorder
        options={["Everything", "Top Headlines"]}
      />
    </SelectContainer>
  </SearchContainer>
);
