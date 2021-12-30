import styled from "styled-components";
import { Button } from "../../Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

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

export const StyledDatePicker = styled(({ ...props }) => (
  <DatePicker {...props} />
))`
  width: 100%;
`;

export const Calendar = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray2};
`;
