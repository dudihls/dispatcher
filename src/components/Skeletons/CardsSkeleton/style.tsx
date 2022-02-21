import styled from "styled-components";

export const StyledSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
  height: 1300px;
  @media ${({ theme }) => theme.device.tablet} {
    height: calc(100% - 68px);
  }
`;
