import React, { useRef, useState } from "react";
import { Icon } from "../../Icon/Icon";
import {
  Container,
  MenuHeader,
  MenuItem,
  MenuList,
  StyledLabel,
} from "./style";
import dropdown from "../../../assets/Icons/dropdown.svg";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { EndPointType, Option } from "../../../store/filters-slice";

export type SelectProps = {
  options: Option[] | EndPointType[];
  initialValue: string;
  endIcon?: string;
  onChange: (option: Option | EndPointType) => any;
  noBorder?: boolean;
  currValue?: Option;
};

export const Select: React.FC<SelectProps> = ({
  initialValue,
  endIcon,
  options,
  onChange,
  currValue,
  noBorder,
}: SelectProps) => {
  const [ToggleOptions, setToggleOptions] = useState(false);
  const ref = useRef(null);
  const onCloseMenu = () => setToggleOptions(false);

  const onClickItem = (option: Option) => {
    onChange && onChange(option);
    onCloseMenu();
  };
  useOnClickOutside(ref, onCloseMenu);

  return (
    <Container ref={ref}>
      <MenuHeader
        type="button"
        noBorder={noBorder}
        onClick={() => setToggleOptions(!ToggleOptions)}
      >
        {currValue?.name || initialValue}
        {endIcon ? <Icon src={endIcon} /> : <Icon src={dropdown} />}
      </MenuHeader>
      {ToggleOptions && (
        <MenuList>
          {options && options.length > 0 ? (
            options.map((option, idx) => (
              <MenuItem onClick={() => onClickItem(option)} key={idx}>
                {option.name}
              </MenuItem>
            ))
          ) : (
            <StyledLabel>There no results yet...</StyledLabel>
          )}
        </MenuList>
      )}
    </Container>
  );
};
