import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 74px;
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 12px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type IconContainerProps = {
  h: number;
  w: number;
  margin?: number;
  ml?: number;
};

export const IconContainer = styled.div<IconContainerProps>`
  height: ${({ h }) => h + "px"};
  width: ${({ w }) => w + "px"};
  margin: ${({ margin }) => margin + "px"};
  margin-inline-end: ${({ ml }) => ml + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EndContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  margin: 12px 0;
`;

