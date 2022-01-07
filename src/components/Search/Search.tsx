import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import search from "../../assets/Icons/search.svg";
import { SearchContainer, SelectContainer } from "./style";
import { DropDown } from "../Dropdown/Dropdown";
import { RecentSearches } from "../RecentSearches/RecentSearches";
import useOnClickOutside from "../../hooks/useClickOutside";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Input from "../Input/Input";

interface SearchProps {
  options?: string[];
  initialValue?: string;
  onSubmit?: (searchValue: string) => any;
  onChangeFilter?: (filterValue: string) => any;
}

export const Search: React.FC<SearchProps> = ({ onSubmit, onChangeFilter }) => {
  const searchFormRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const closeInputExpand = () => setHasFocus(false);

  useOnClickOutside(searchFormRef, closeInputExpand);

  const [recentSearches, setRecentSearches] = useLocalStorage("searches", []);
  const [searches, setSearches] = useState<string[]>(recentSearches);

  useEffect(() => {
    setRecentSearches(searches);
  }, [searches,setRecentSearches]);

  const onClear = () => {
    setSearches([]);
  };

  const onDeleteSearch = (idx: number) => {
    setSearches((prevSearches) =>
      prevSearches.filter((search, currIdx) => currIdx !== idx)
    );
  };

  const addRecentSearch = (value: string) => {
    setSearches((prevSearches) => [value, ...prevSearches]);
  };

  const onEnterSearch = (
    ev: React.FormEvent<HTMLFormElement> | null,
    isRecentSearch: boolean,
    value: string
  ) => {
    if (!value) return;
    ev && ev.preventDefault();
    if (!isRecentSearch && !isExistInRecentSearches(value))
      addRecentSearch(value);
    onSubmit && onSubmit(value);
    closeInputExpand();
    searchInputRef.current?.blur();
  };

  const isExistInRecentSearches = (search: string) =>
    searches.findIndex((s) => s === search) > -1;

  const onClickSearch = (value: string) => {
    setInputValue(value);
    onEnterSearch(null, true, value);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const searchesToDisplay = searches.filter(
    (s) => s.includes(inputValue) && s !== inputValue
  );

  return (
    <SearchContainer
      onSubmit={(ev) => onEnterSearch(ev, false, inputValue)}
      hasFocus={hasFocus}
      ref={searchFormRef}
    >
      <Icon src={search} margin={13} color="purple" />
      <Input
        ref={searchInputRef}
        value={inputValue}
        onChange={inputChangeHandler}
        onFocus={() => setHasFocus(true)}
        noBorder
        placeholder="Search"
      />
      <SelectContainer>
        <DropDown
          onChange={onChangeFilter}
          initialValue={"Top Headlines"}
          noBorder
          options={["Everything", "Top Headlines"]}
        />
      </SelectContainer>
      {hasFocus && searchesToDisplay.length > 0 && (
        <RecentSearches
          onClear={onClear}
          onDeleteSearch={(idx) => onDeleteSearch(idx)}
          searches={searchesToDisplay}
          onClickSearch={onClickSearch}
        />
      )}
    </SearchContainer>
  );
};
