import styled from "styled-components";
import { FlexLayout } from "../FlexLayout/FlexLayout";

export const Container = styled(FlexLayout)`
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 30%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 40%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width: 350px;
  @media ${({ theme }) => theme.device.tablet} {
    height: 50%;
    min-width: 0;
    min-height: 0;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
