import { GraphCard, HeaderLine, HeaderWrapper, StyledHeader } from "../style";
import {
  Dot,
  GraphContainer,
  LabelContainer,
  LabelsContainer,
  StyledPrecentage,
  StyledValueText,
  Wrapper,
} from "./style";
import { PieChart, Pie, Cell, Legend } from "recharts";
import {
  Props as LegendProps,
  ContentType as LegendType,
} from "recharts/types/component/DefaultLegendContent";
type DataProps = {
  name: string;
  value: number;
};
interface DoughnutGraphProps {
  header?: string;
  data?: DataProps[];
  colorPalette: string[];
  innerText: string;
}

export const DoughnutGraph: React.FC<DoughnutGraphProps> = ({
  header,
  data,
  innerText,
  colorPalette,
}) => {
  const renderLegend: LegendType = (props: LegendProps) => {
    const { payload } = props;
    console.log(props);

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
  return (
    <GraphCard>
      <HeaderWrapper>
        <StyledHeader>{header}</StyledHeader>
        <HeaderLine />
      </HeaderWrapper>
      <GraphContainer width="100%" height="100%">
        <PieChart width={360} height={280}>
          <text x={180} y={74} dy={8} textAnchor="middle">
            {innerText}
          </text>
          <Pie
            data={data}
            cy={70}
            innerRadius={50}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data &&
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorPalette[index % colorPalette.length]}
                />
              ))}
          </Pie>

          <Legend content={renderLegend} />
        </PieChart>
      </GraphContainer>
    </GraphCard>
  );
};
