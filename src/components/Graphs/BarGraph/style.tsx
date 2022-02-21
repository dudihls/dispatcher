import styled, { keyframes } from "styled-components";

export const BarGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const StyledLineBackGround = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray2};
  width: 170px;
  height: 12px;
  border-radius: 10px;
  margin-inline-start: 8px;
`;

const progress = ({ percentage }: { percentage: number }) => keyframes`
from {
    width: 0%;
}
  to {
      width: ${percentage}%;
      }
`;
export const StyledLineProgress = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 0px;
  height: 12px;
  animation: ${progress} 3s forwards;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin: ${({ theme }) => theme.spacing(3)} 0;
  padding-inline-end: ${({ theme }) => theme.spacing(1.5)};
`;

export const StyledLabel = styled.p`
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
