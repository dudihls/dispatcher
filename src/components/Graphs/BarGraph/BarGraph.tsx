import { DataProps } from "..";
import { GraphCard, HeaderLine, HeaderWrapper, StyledHeader } from "../style";
import {
  BarGraphContainer,
  StyledLabel,
  StyledLineBackGround,
  StyledLineProgress,
  StyledRow,
  Wrapper,
} from "./style";

type BarGraphProps = {
  header: string;
  data: DataProps[];
};

export const BarGraph: React.FC<BarGraphProps> = ({ header, data }) => {
  const sum = data?.reduce(
    (accumulator, instance) => accumulator + instance.value,
    0
  );

  return (
    <GraphCard>
      <HeaderWrapper>
        <StyledHeader>{header}</StyledHeader>
        <HeaderLine />
      </HeaderWrapper>
      <BarGraphContainer>
        {data?.map((instance, idx) => {
          const percentage = (100 * instance.value) / sum;
          return (
            <StyledRow key={idx}>
              <StyledLabel>{instance.name}</StyledLabel>
              <Wrapper>
                <StyledLabel>{Math.round(percentage)}%</StyledLabel>
                <StyledLineBackGround>
                  <StyledLineProgress percentage={percentage} />
                </StyledLineBackGround>
              </Wrapper>
            </StyledRow>
          );
        })}
      </BarGraphContainer>
    </GraphCard>
  );
};
