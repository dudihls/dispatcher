import { StyledFilterRow, StyledName, StyledValue } from "./style";

type FilterRowProps = {
  name: string;
  value: string;
  isFirst: boolean;
  onClickFilter: (name: string) => any;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  name,
  value,
  isFirst,
  onClickFilter,
}) => {
  return (
    <StyledFilterRow onClick={() => onClickFilter(name)}>
      <StyledName>{name}</StyledName>
      <StyledValue isFirst={isFirst}>{value}</StyledValue>
    </StyledFilterRow>
  );
};
