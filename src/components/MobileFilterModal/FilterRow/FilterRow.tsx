import { StyledFilterRow, StyledName, StyledValue } from "./style";

type FilterRowProps = {
  header: string;
  value?: string;
  isDefaultValue?: boolean;
  onClickRow: (header: string) => any;
  isDisabled?: boolean;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  header,
  value,
  onClickRow,
  isDefaultValue,
  isDisabled = false,
}) => {
  return (
    <StyledFilterRow isDisabled={isDisabled} onClick={() => onClickRow(header)}>
      <StyledName>{header}</StyledName>
      {value && <StyledValue isDefault={isDefaultValue}>{value}</StyledValue>}
    </StyledFilterRow>
  );
};
