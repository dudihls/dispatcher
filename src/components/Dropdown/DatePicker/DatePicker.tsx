import { MouseEvent, useRef, useState } from "react";
import { MenuHeader } from "../Select/style";
import { Icon } from "../../Icon/Icon";
import date from "../../../assets/Icons/date.svg";
import { StyledButton, StyledContainer, StylingCalendar } from "./style";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useOnClickOutside from "../../../hooks/useClickOutside";
export type DatePickerProps = {
  onSubmitDate?: (startDate: Date | null, endDate: Date | null) => any;
  initialDate: Date;
};

export const DateDropDown: React.FC<DatePickerProps> = ({
  onSubmitDate,
  initialDate,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(initialDate);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const ref = useRef(null);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClose = (ev: MouseEvent) => {
    ev.preventDefault();
    setIsOpen(false);
  };

  const handleOnSubmit = (ev: MouseEvent) => {
    onClose(ev);
    onSubmitDate && onSubmitDate(startDate, endDate);
  };

  useOnClickOutside(ref, onClose, "mousedown");

  return (
    <StyledContainer ref={ref}>
      <MenuHeader onClick={() => setIsOpen(!isOpen)}>
        Date
        <Icon src={date} />
      </MenuHeader>
      {isOpen && (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          calendarContainer={StylingCalendar}
        >
          <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
        </DatePicker>
      )}
    </StyledContainer>
  );
};
