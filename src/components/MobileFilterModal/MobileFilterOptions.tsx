import { Icon } from "../Icon/Icon";
import { FilterRow } from "./FilterRow/FilterRow";
import { EndPointFilter, FilterProps } from "./MobileFilterModal";
import { Body, HeaderWrapper, StyledHeader, TopWrapper } from "./style";
import back from "../../assets/Icons/back.svg";
import { EndPointType, Option } from "../../types";

type MobileFilterOptionProps = {
  filter: FilterProps | EndPointFilter;
  onGoBack: () => void;
  onClickOption: (option: Option | EndPointType, header: string) => any;
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
    <Body>
      {filter.options.map((option, idx) => (
        <FilterRow
          header={option.name}
          onClickRow={() => onClickOption(option, filter.header)}
          key={idx}
        />
      ))}
    </Body>
  </TopWrapper>
);
