import { DataProps } from "..";
import {
  GraphCard,
  GraphContainer,
  HeaderLine,
  HeaderWrapper,
  StyledHeader,
} from "../style";
import { AreaChart, XAxis, Area } from "recharts";
import { theme } from "../../../global-styles/theme";
import { AxisLabel } from "./style";
import { Skeleton } from "./components/Skeleton";
import { NotFound } from "../NotFound";
import { Tooltip } from "recharts";
import dayjs from "dayjs";

type AreaGraphProps = {
  data: DataProps[] | null;
  header: string;
  isLoading: boolean;
};

export const AreaGraph: React.FC<AreaGraphProps> = ({
  header,
  isLoading,
  data,
}) => (
  <GraphCard>
    <HeaderWrapper>
      <StyledHeader>{header}</StyledHeader>
      <HeaderLine />
    </HeaderWrapper>
    {isLoading ? (
      <Skeleton />
    ) : data ? (
      <GraphContainer>
        <AreaChart data={data} height={400} width={400} margin={{ top: 100 }}>
          <defs>
            <linearGradient id="Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={theme.graphColorPalette.area.blue}
                stopOpacity={0.3}
              />
              <stop
                offset="100%"
                stopColor={theme.graphColorPalette.area.lightBlue}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            interval="preserveStartEnd"
            tickMargin={12}
            axisLine={false}
            tickLine={false}
            label={<AxisLabel />}
            dataKey="name"
            tickFormatter={(t) => t.toUpperCase()}
            tick={{ fill: theme.colors.lightPurple }}
          />
          <Tooltip labelFormatter={(name) => name} />

          <Area
            type="monotone"
            dataKey="value"
            name="Amount"
            stroke={theme.graphColorPalette.area.blue}
            fill="url(#Gradient)"
            strokeWidth={4}
          />
        </AreaChart>
      </GraphContainer>
    ) : (
      <NotFound />
    )}
  </GraphCard>
);
