import styled from "styled-components";
import { Button } from "../../Button/Button";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 175px;
`;

export const StyledButton = styled(Button)`
  border-radius: 0;
  color: white;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  &:hover {
    background-color: ${({ theme }) => theme.colors.inputHolder};
  }
`;

export const StyledResetButton = styled(Button)`
  color: white;
  border-radius: 0;
  background-color: #7e7e7e;
  &:hover {
    background-color: #b3afaf92;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StylingCalendar = styled.div`
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.lightGray2};
`;
