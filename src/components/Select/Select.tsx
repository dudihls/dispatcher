import React, { useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import { Container, MenuHeader, MenuItem, MenuList } from "./style";
import dropdown from "../../assets/Icons/dropdown.svg";
import useOnClickOutside from "../../hooks/useClickOutside";

interface SelectProps {
  options: string[];
  initialValue: string;
  endIcon?: string;
  onChange?: (value: string) => any;
  noBorder?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  initialValue,
  endIcon,
  options,
  onChange,
  noBorder,
}) => {
  const [ToggleOptions, setToggleOptions] = useState(false);
  const [selectedVal, setSelectedVal] = useState(initialValue);
  const ref = useRef(null);
  const onCloseMenu = () => setToggleOptions(false);
  useOnClickOutside(ref, onCloseMenu, "mousedown");

  return (
    <Container ref={ref}>
      <MenuHeader noBorder={noBorder} onClick={() => setToggleOptions(true)}>
        {selectedVal}
        {endIcon ? <Icon src={endIcon} /> : <Icon src={dropdown} />}
      </MenuHeader>
      {ToggleOptions && (
        <MenuList>
          {options.map((option, idx) => (
            <MenuItem
              onClick={() => {
                setSelectedVal(option);
                onChange && onChange(option);
                onCloseMenu();
              }}
              key={idx}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Container>
  );
};
