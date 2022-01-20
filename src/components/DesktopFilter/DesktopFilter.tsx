import { DropDown, DropDownProps } from "../Dropdown/Dropdown";
import { StyledContainer } from "./style";

interface DesktopFilterProps {
  dropdowns: ({ id: string } & DropDownProps)[];
}

export const DesktopFilter: React.FC<DesktopFilterProps> = ({ dropdowns }) => {
  return (
    <StyledContainer>
      {dropdowns.map(({ id, ...dropdown }) => (
        <DropDown key={id} {...dropdown} />
      ))}
    </StyledContainer>
  );
};
