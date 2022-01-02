import { DropDown, DropDownProps } from "../Dropdown/Dropdown";
import { StyledContainer } from "./style";

interface DesktopFilterProps {
  dropdowns: DropDownProps[];
}

export const DesktopFilter: React.FC<DesktopFilterProps> = ({ dropdowns }) => {
  return (
    <StyledContainer>
      {dropdowns.map((dropdown, idx) => (
        <DropDown key={idx} {...dropdown} />
      ))}
    </StyledContainer>
  );
};
