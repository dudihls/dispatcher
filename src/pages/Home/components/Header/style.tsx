import styled from "styled-components";

export const StyledHeader = styled.p`
  font-size: 24px;
  margin-block-end: 20px;
  margin-block-start: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-block-start: 20px;
  }
`;

export const StyledTotalResults = styled.p`
  margin-block-start: 8px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #5a5a8980;
  margin-block-end: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-block-start: 20px;
  }
`;
