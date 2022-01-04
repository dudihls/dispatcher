import { StyledFilterRow, StyledName, StyledValue } from "./style";

type FilterRowProps = {
  header: string;
  value?: string;
  isDefaultValue?: boolean;
  onClickRow: (header: string) => any;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  header,
  value,
  onClickRow,
  isDefaultValue,
}) => {
  return (
    <StyledFilterRow onClick={() => onClickRow(header)}>
      <StyledName>{header}</StyledName>
      {value && <StyledValue isDefault={isDefaultValue}>{value}</StyledValue>}
    </StyledFilterRow>
  );
};
