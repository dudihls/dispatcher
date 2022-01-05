import { GraphCard, HeaderLine, HeaderWrapper, StyledHeader } from "../style";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { GraphContainer, StyledInnerText } from "./style";

ChartJS.register(ArcElement, Legend);

interface DoughnutGraphProps {
  header?: string;
  data?: {
    labels?: string[];
    dataValues: number[];
    colorPalette: string[];
  };
  innerText: string;
}

export const DoughnutGraph: React.FC<DoughnutGraphProps> = ({
  header,
  data,
  innerText,
}) => (
  <GraphCard>
    <HeaderWrapper>
      <StyledHeader>{header}</StyledHeader>
      <HeaderLine />
    </HeaderWrapper>
    <GraphContainer>
      <Doughnut
        options={{
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                usePointStyle: true,
                boxWidth: 4,
              },
            },
          },
          cutout: "85%",
        }}
        data={{
          labels: ["a", "b", "c"],
          datasets: [
            {
              label: "# of Votes",
              data: data?.dataValues,
              backgroundColor: data?.colorPalette,
              borderWidth: 0,
            },
          ],
        }}
      />
    </GraphContainer>
    {/* <ContentWrapper></ContentWrapper> */}
  </GraphCard>
);
