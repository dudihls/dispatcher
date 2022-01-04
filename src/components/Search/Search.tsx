import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer, StyledInput } from "./style";
import { DropDown } from "../Dropdown/Dropdown";

interface SearchProps {
  options?: string[];
  initialValue?: string;
  onChange?: (value: string) => any;
}

export const Search: React.FC<SearchProps> = ({ onChange }) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <SearchContainer hasFocus={hasFocus}>
      <Icon src={search} margin={13} color="purple" />
      <StyledInput
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        noBorder
        placeholder="Search"
      />
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
};
