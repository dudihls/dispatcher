import { DataProps } from "..";
import { NotFound } from "../NotFound";
import { GraphCard, HeaderLine, HeaderWrapper, StyledHeader } from "../style";
import { Skeleton } from "./components/Skeleton";
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
  data: DataProps[] | null;
  isLoading: boolean;
};

export const BarGraph: React.FC<BarGraphProps> = ({
  isLoading,
  header,
  data,
}) => {
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
      {isLoading ? (
        <Skeleton />
      ) : data ? (
        <BarGraphContainer>
          {data.map((instance, idx) => {
            const percentage = sum === 0 ? 0 : (100 * instance.value) / sum!;
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
      ) : (
        <NotFound />
      )}
    </GraphCard>
  );
};
