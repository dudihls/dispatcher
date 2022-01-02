import { useState } from "react";
import { Icon } from "../Icon/Icon";
import back from "../../assets/Icons/back.svg";
import {
  ButtonWrapper,
  Container,
  HeaderWrapper,
  StyledFooter,
  StyledHeader,
  TopWrapper,
} from "./style";
import { FlexLayout } from "../FlexLayout/FlexLayout";
import { FilterRow } from "./FilterRow/FilterRow";
import { Button } from "../Button/Button";
type FilterProps = {};

interface MobileFilterModalProps {
  open: boolean;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  open,
}) => {
  const [displayIcon, setDisplayIcon] = useState(false);
  const filters = [
    {
      name: "Search in",
      value: "Everything",
      options: ["Everything", "Top headings"],
    },
    {
      name: "Sources",
      value: "Walla",
      options: ["CSS", "ACDME", "CNN", "JavaScript"],
    },
  ];
  return (
    <Container open={open}>
      <TopWrapper>
        <HeaderWrapper>
          {displayIcon && <Icon src={back} />}
          <StyledHeader>Filter</StyledHeader>
        </HeaderWrapper>
        {filters.map((filter, idx) => (
          <FilterRow {...filter} key={idx} isFirst={idx === 0} />
        ))}
      </TopWrapper>
      <StyledFooter>
        <ButtonWrapper>
          <Button size="md">VIEW RESULTS</Button>
        </ButtonWrapper>
      </StyledFooter>
    </Container>
  );
};
