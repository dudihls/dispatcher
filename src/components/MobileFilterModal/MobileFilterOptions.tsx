import { Icon } from "../Icon/Icon";
import { FilterRow } from "./FilterRow/FilterRow";
import { FilterProps } from "./MobileFilterModal";
import { HeaderWrapper, StyledHeader, TopWrapper } from "./style";
import back from "../../assets/Icons/back.svg";

type MobileFilterOptionProps = {
  filter: FilterProps;
  onGoBack: () => void;
  onClickOption: (idx: number) => any;
};

export const MobileFilterOptions: React.FC<MobileFilterOptionProps> = ({
  filter,
  onGoBack,
  onClickOption,
}) => (
  <TopWrapper>
    <HeaderWrapper>
      <Icon size="sm" ml={17} src={back} onClick={onGoBack} />
      <StyledHeader>{filter.header}</StyledHeader>
    </HeaderWrapper>
    {filter.options.map((option, idx) => (
      <FilterRow
        header={option}
        onClickRow={() => onClickOption(idx)}
        key={idx}
      />
    ))}
  </TopWrapper>
);
