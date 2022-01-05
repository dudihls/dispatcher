import React, { useRef, useState } from "react";
import { Icon } from "../../Icon/Icon";
import { Container, MenuHeader, MenuItem, MenuList } from "./style";
import dropdown from "../../../assets/Icons/dropdown.svg";
import useOnClickOutside from "../../../hooks/useClickOutside";

export type SelectProps = {
  options: string[];
  initialValue: string;
  endIcon?: string;
  onChange?: (value: string) => any;
  noBorder?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  initialValue,
  endIcon,
  options,
  onChange,
  noBorder,
}: SelectProps) => {
  const [ToggleOptions, setToggleOptions] = useState(false);
  const [selectedVal, setSelectedVal] = useState(initialValue);
  const ref = useRef(null);
  const onCloseMenu = () => setToggleOptions(false);

  const onClickItem = (option: string) => {
    setSelectedVal(option);
    onChange && onChange(option);
    onCloseMenu();
  };
  useOnClickOutside(ref, onCloseMenu, "mousedown");

  return (
    <Container ref={ref}>
      <MenuHeader
        type="button"
        noBorder={noBorder}
        onClick={() => setToggleOptions(!ToggleOptions)}
      >
        {selectedVal}
        {endIcon ? <Icon src={endIcon} /> : <Icon src={dropdown} />}
      </MenuHeader>
      {ToggleOptions && (
        <MenuList>
          {options &&
            options.map((option, idx) => (
              <MenuItem onClick={() => onClickItem(option)} key={idx}>
                {option}
              </MenuItem>
            ))}
        </MenuList>
      )}
    </Container>
  );
};
