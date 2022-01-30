import styled from "styled-components";

export const StyledHeader = styled.p`
  font-size: 24px;
  margin-block-end: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-block-start: 20px;
  }
`;
