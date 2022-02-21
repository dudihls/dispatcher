import { useCallback, useMemo, useRef, useState } from "react";
import { StyledFilterRow, StyledName, StyledValue } from "./style";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  StyledContainer,
  StyledResetButton,
  StylingCalendar,
} from "../../Dropdown/DatePicker/style";
import useOnClickOutside from "../../../hooks/useClickOutside";
import dayjs from "dayjs";

type FilterRowProps = {
  onSubmitDate: (startDate: Date | null, endDate: Date | null) => any;
  header: string;
  currDate: { startDate: Date | null; endDate: Date | null };
};

export const DateFilterRow: React.FC<FilterRowProps> = ({
  header,
  currDate,
  onSubmitDate,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    currDate.startDate || null
  );
  const [endDate, setEndDate] = useState<Date | null>(currDate.endDate || null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const minDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1,
    new Date().getDate()
  );
  const ref = useRef(null);
  const maxDate = new Date();

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onSubmitDate(start, end);
  };

  useOnClickOutside(ref, onClose, "mousedown");

  const parseDate = useCallback((date: string | Date | null) => {
    if (!date) return null;
    else return dayjs(date).format("DD.MM");
  }, []);

  const menuLabel = useMemo(() => {
    if (startDate && !endDate) {
      return `${parseDate(startDate)} - ${parseDate(maxDate)}`;
    }
    if (startDate && endDate) {
      return `${parseDate(startDate)} - ${parseDate(endDate)}`;
    }
    if (!startDate && endDate) {
      return `${parseDate(minDate)} - ${parseDate(endDate)}`;
    } else return "All";
  }, [startDate, endDate]);

  const reset = () => {
    setEndDate(null);
    setStartDate(null);
    onSubmitDate(null, null);
  };

  return (
    <div ref={ref}>
      <StyledFilterRow
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <StyledName>{header}</StyledName>
        <StyledValue> {menuLabel}</StyledValue>
      </StyledFilterRow>
      {isOpen && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DatePicker
            wrapperClassName="datePicker"
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
            <StyledResetButton onClick={(ev) => reset()}>
              Reset
            </StyledResetButton>
          </DatePicker>
        </div>
      )}
    </div>
  );
};
