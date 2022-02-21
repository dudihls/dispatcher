import { MouseEvent, useCallback, useMemo, useRef, useState } from "react";
import { MenuHeader } from "../Select/style";
import { Icon } from "../../Icon/Icon";
import dateIcon from "../../../assets/Icons/date.svg";
import {
  ButtonsContainer,
  StyledButton,
  StyledContainer,
  StyledResetButton,
  StylingCalendar,
} from "./style";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import useOnClickOutside from "../../../hooks/useClickOutside";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
export type DatePickerProps = {
  onSubmitDate: (startDate: Date | null, endDate: Date | null) => any;
  initialDate: Date;
};

export const DateDropDown: React.FC<DatePickerProps> = ({
  onSubmitDate,
  initialDate,
}) => {
  const { date } = useSelector((state: RootState) => state.filters);
  const [startDate, setStartDate] = useState<Date | null>(initialDate);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const ref = useRef(null);
  
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const onCloseOutside = () => {
    const startDateToSet = date.startDate ? new Date(date.startDate) : null;
    const endDateToSet = date.endDate ? new Date(date.endDate) : null;
    setStartDate(startDateToSet);
    setEndDate(endDateToSet);
    onClose();
  };
  
  const onClose = () => {
    setIsOpen(false);
  };

  const handleOnSubmit = (ev: MouseEvent, isReset: boolean = false) => {
    ev.preventDefault();
    onClose();

    if (isReset) {
      setEndDate(null);
      setStartDate(null);
      onSubmitDate(null, null);
    } else onSubmitDate(startDate, endDate);
  };
  const minDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1,
    new Date().getDate()
  );
  const maxDate = new Date();

  const parseDate = useCallback((date: string | Date | null) => {
    if (!date) return null;
    else return dayjs(date).format("DD.MM");
  }, []);

  const menuLabel = useMemo(() => {
    if (initialDate === startDate) return "Date";
    if (startDate && !endDate) {
      return `${parseDate(startDate)} - ${parseDate(maxDate)}`;
    }
    if (startDate && endDate) {
      return `${parseDate(startDate)} - ${parseDate(endDate)}`;
    }
    if (!startDate && endDate) {
      return `${parseDate(minDate)} - ${parseDate(endDate)}`;
    } else return "Date";
  }, [startDate, endDate]);

  useOnClickOutside(ref, onCloseOutside, "mousedown");
  return (
    <StyledContainer ref={ref}>
      <MenuHeader onClick={() => setIsOpen(!isOpen)}>
        {menuLabel}
        <Icon src={dateIcon} />
      </MenuHeader>
      {isOpen && (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={minDate}
          maxDate={maxDate}
          inline
          calendarContainer={StylingCalendar}
        >
          <ButtonsContainer>
            <StyledResetButton onClick={(ev) => handleOnSubmit(ev, true)}>
              Reset
            </StyledResetButton>
            <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
          </ButtonsContainer>
        </DatePicker>
      )}
    </StyledContainer>
  );
};
