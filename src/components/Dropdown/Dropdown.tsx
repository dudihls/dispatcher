import { Select, SelectProps } from "./Select/Select";
import { DatePicker, DatePickerProps } from "./DatePicker/DatePicker";

export type DropDownProps = SelectProps | DatePickerProps;

const isDatePicker = (props: DropDownProps): props is DatePickerProps =>
  "initialDate" in props;

export const DropDown: React.FC<DropDownProps> = (props) =>
  isDatePicker(props) ? (
    <DatePicker
      initialDate={props.initialDate}
      onSubmitDate={props.onSubmitDate}
    />
  ) : (
    <Select {...props} />
  );
