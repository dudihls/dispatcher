import React, { useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer, StyledInput } from "./style";
import { DropDown } from "../Dropdown/Dropdown";
import { RecentSearches } from "../RecentSearches/RecentSearches";
import useOnClickOutside from "../../hooks/useClickOutside";

interface SearchProps {
  options?: string[];
  initialValue?: string;
  onChange?: (value: string) => any;
}

export const Search: React.FC<SearchProps> = ({ onChange }) => {
  const ref = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);
  useOnClickOutside(ref, () => setHasFocus(false));

  return (
    <SearchContainer hasFocus={hasFocus} ref={ref}>
      <Icon src={search} margin={13}  color="purple" />
      <StyledInput
        onFocus={() => setHasFocus(true)}
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
      {hasFocus && (
        <RecentSearches
          onClickSearch={(idx) => {}}
          onClear={() => {}}
          onDeleteSearch={(idx) => {}}
          searches={["aa", "bb"]}
        />
      )}
    </SearchContainer>
  );
};
