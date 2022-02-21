import React, { useRef, useState } from "react";
import { Icon } from "../../Icon/Icon";
import {
  Container,
  MenuHeader,
  MenuHeaderLabel,
  MenuItem,
  MenuList,
  StyledLabel,
} from "./style";
import dropdown from "../../../assets/Icons/dropdown.svg";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { EndPointType, Option } from "../../../types";

export type SelectProps = {
  options: Option[] | EndPointType[];
  initialValue: string;
  endIcon?: string;
  onChange: (option: Option | EndPointType) => any;
  noBorder?: boolean;
  currValue?: Option;
  isAllDisabled?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  initialValue,
  endIcon,
  options,
  onChange,
  currValue,
  noBorder,
  isAllDisabled,
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
        isSelected={!!currValue?.name && !!currValue?.value}
        noBorder={noBorder}
        onClick={() => setToggleOptions(!ToggleOptions)}
      >
        <MenuHeaderLabel>
          {currValue?.name && currValue?.value ? currValue?.name : initialValue}
        </MenuHeaderLabel>
        {endIcon ? <Icon src={endIcon} /> : <Icon src={dropdown} size="xs" />}
      </MenuHeader>
      {ToggleOptions && (
        <MenuList>
          {options && options.length > 0 ? (
            options.map((option, idx) => {
              return (
                <MenuItem
                  disabled={isAllDisabled && idx === 0}
                  onClick={() => onClickItem(option)}
                  key={idx}
                >
                  {option.name}
                </MenuItem>
              );
            })
          ) : (
            <StyledLabel>There no results yet...</StyledLabel>
          )}
        </MenuList>
      )}
    </Container>
  );
};
