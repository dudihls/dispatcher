import styled from "styled-components";
import { GraphContainer } from "../style";

export const DoughnutGraphContainer = styled(GraphContainer)`
  text {
    color: ${({ theme }) => theme.colors.pieText};
    font-family: Mulish;
    font-size: 12px;
    font-weight: 400;
  }

`;


