import { GraphCard, HeaderLine, HeaderWrapper, StyledHeader } from "../style";
import { DoughnutGraphContainer } from "./style";
import { PieChart, Pie, Cell, Legend } from "recharts";

import { DataProps } from "..";
import { CustomLegend } from "./components/CustomLegend/CustomLegend";

interface DoughnutGraphProps {
  header?: string;
  data?: DataProps[] | null;
  colorPalette: string[];
  innerText: string;
}

export const DoughnutGraph: React.FC<DoughnutGraphProps> = ({
  header,
  data,
  innerText,
  colorPalette,
}) => {
  return (
    <GraphCard>
      <HeaderWrapper>
        <StyledHeader>{header}</StyledHeader>
        <HeaderLine />
      </HeaderWrapper>
      {data && (
        <DoughnutGraphContainer width="100%" height="100%">
          <PieChart>
            <text x={156} y={74} dy={8} textAnchor="middle">
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
            <Legend content={CustomLegend} />
          </PieChart>
        </DoughnutGraphContainer>
      )}
    </GraphCard>
  );
};
