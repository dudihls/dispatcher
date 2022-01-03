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
import { FilterRow } from "./FilterRow/FilterRow";
import { Button } from "../Button/Button";

type FilterProps = {
  name: string;
  options: string | string[];
  value: string;
};

interface MobileFilterModalProps {
  filters: FilterProps[];
  open: boolean;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  open,
  filters,
}) => {
  const [header, setHeader] = useState("Filter");

  const onClickFilter = (name: string) => {
    setHeader(name);
  };

  const onGoBack = () => {
    setHeader("Filter");
  };

  return (
    <Container open={open}>
      <TopWrapper>
        <HeaderWrapper>
          {header !== "Filter" && (
            <Icon size="sm" ml={17} src={back} onClick={onGoBack} />
          )}
          <StyledHeader>{header}</StyledHeader>
        </HeaderWrapper>
        {filters.map((filter, idx) => (
          <FilterRow
            {...filter}
            onClickFilter={onClickFilter}
            key={idx}
            isFirst={idx === 0}
          />
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
