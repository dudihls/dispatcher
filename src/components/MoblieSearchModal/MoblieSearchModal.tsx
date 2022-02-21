import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Icon } from "../Icon/Icon";
import {
  RecentSearchesLayout,
  SearchBarWrapper,
  SearchLayout,
  StyledSearchLabel,
} from "./style";
import back from "../../assets/Icons/back.svg";
import exit from "../../assets/Icons/exit.svg";
import search from "../../assets/Icons/search.svg";
import Input from "../Input/Input";
import { RecentSearches } from "../RecentSearches/RecentSearches";

export const MoblieSearchModal: React.FC<{
  isOpen: boolean;
  onClose: () => any;
  onSubmit?: (value: string) => any;
}> = ({ isOpen, onClose, onSubmit }) => {
  const root = document.getElementById("root")!;
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useLocalStorage("searches", []);
  const [searches, setSearches] = useState<string[]>(recentSearches);
  const [searchVal, setSearchVal] = useState("");

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setIsSearching(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setRecentSearches(searches);
  }, [searches, setRecentSearches]);

  const onClickExit = () => {
    setSearchVal("");
    searchInputRef.current?.focus();
  };

  const onClickBack = () => {
    setSearchVal("");
    onClose();
  };

  const onClear = () => {
    setSearches([]);
  };

  const onDeleteSearch = (idx: number) => {
    setSearches((prevSearches) =>
      prevSearches.filter((search, currIdx) => currIdx !== idx)
    );
  };

  const addRecentSearch = (value: string) => {
    value && setSearches((prevSearches) => [value, ...prevSearches]);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchVal(e.target.value);

  const onEnterSearch = (
    ev: React.FormEvent<HTMLFormElement> | null,
    isRecentSearch: boolean,
    value: string
  ) => {
    isRecentSearch && setIsSearching((prev) => !prev);
    !isRecentSearch && searchVal && setIsSearching((prev) => !prev);
    ev && ev.preventDefault();
    if (!isRecentSearch && !isExistInRecentSearches(value))
      addRecentSearch(value);
    onSubmit && onSubmit(value);
  };

  const isExistInRecentSearches = (search: string) =>
    searches.findIndex((s) => s === search) > -1;

  const BackToSearch = () => setIsSearching((prev) => !prev);

  return createPortal(
    <>
      <SearchLayout
        isOpen={isOpen}
        onSubmit={(ev) => onEnterSearch(ev, false, searchVal)}
      >
        <SearchBarWrapper>
          {!isOpen || isSearching ? (
            <>
              <Icon ml={2} src={back} onClick={onClickBack} />
              <Input
                ref={searchInputRef}
                value={searchVal}
                onChange={inputChangeHandler}
                noBorder
              />
              <Icon src={exit} onClick={onClickExit} />
            </>
          ) : (
            <>
              <StyledSearchLabel>
                {searchVal && `"${searchVal}"`}
              </StyledSearchLabel>
              <Icon src={search} onClick={BackToSearch} />
            </>
          )}
        </SearchBarWrapper>
      </SearchLayout>
      <RecentSearchesLayout isOpen={isSearching}>
        <RecentSearches
          isMoblie
          onClear={onClear}
          searches={searches}
          onDeleteSearch={onDeleteSearch}
          onClickSearch={(value) => {
            setSearchVal(value);
            onEnterSearch(null, true, value);
          }}
        />
      </RecentSearchesLayout>
    </>,
    root
  );
};
