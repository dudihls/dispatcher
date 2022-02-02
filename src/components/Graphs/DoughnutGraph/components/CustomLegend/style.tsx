import styled from "styled-components";

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100px;
`;

export const Dot = styled.div<{ color: string }>`
  border-radius: 10px;
  border: 5px solid ${({ color }) => color};
  margin-inline-end: 16px;
`;

export const StyledValueText = styled.p`
  font-family: Mulish;
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.pieText};
`;

export const StyledPrecentage = styled.span`
  font-family: Mulish;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.piePercent};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 12px;
`;
