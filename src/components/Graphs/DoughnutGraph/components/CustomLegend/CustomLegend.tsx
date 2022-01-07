import {
  Props as LegendProps,
  ContentType as LegendType,
} from "recharts/types/component/DefaultLegendContent";
import {
  Dot,
  LabelContainer,
  LabelsContainer,
  StyledPrecentage,
  StyledValueText,
  Wrapper,
} from "./style";

export const CustomLegend: LegendType = (props: LegendProps) => {
  const { payload } = props;
  return (
    <LabelsContainer>
      {payload &&
        payload.map((entry: any, index: any) => (
          <LabelContainer key={`item-${index}`}>
            <Wrapper>
              <Dot color={entry.color} />
              <StyledValueText>{entry.value}</StyledValueText>
            </Wrapper>
            <StyledPrecentage>
              {Math.round(entry.payload.percent * 100)}%
            </StyledPrecentage>
          </LabelContainer>
        ))}
    </LabelsContainer>
  );
};
