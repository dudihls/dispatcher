import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const StyledHeader = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const GraphCard = styled.div`
  height: 378px;
  width: 360px;
  border-radius: 20px;
  padding: 25px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLine = styled.div`
  width: 20px;
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.colors.lightPurple};
`;

export const GraphContainer = styled(ResponsiveContainer)`
  height: 100%;
  width: 100%;
`;

export const NotFoundContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLabel = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const NotFoundGraph = styled.img`
  width: 133px;
  height: 133px;
  margin-block-end: 12px;
`;
