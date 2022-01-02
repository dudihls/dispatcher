import { StyledFilterRow, StyledName, StyledValue } from "./style";

type FilterRowProps = {
  name: string;
  value: string;
  options: string | string[];
  isFirst: boolean;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  name,
  value,
  options,
  isFirst,
}) => {
  return (
    <StyledFilterRow>
      <StyledName>{name}</StyledName>
      <StyledValue isFirst={isFirst}>{value}</StyledValue>
    </StyledFilterRow>
  );
};
