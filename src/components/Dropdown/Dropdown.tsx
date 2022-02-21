import { Select, SelectProps } from "./Select/Select";
import { DateDropDown, DatePickerProps } from "./DatePicker/DatePicker";

export type DropDownProps = SelectProps | DatePickerProps;

const isDatePicker = (props: DropDownProps): props is DatePickerProps =>
  "initialDate" in props;

export const DropDown: React.FC<DropDownProps> = (props) =>
  isDatePicker(props) ? (
    <DateDropDown
      initialDate={props.initialDate}
      onSubmitDate={props.onSubmitDate}
    />
  ) : (
    <Select {...props} />
  );
