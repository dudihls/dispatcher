import { Select, SelectProps } from "./Select/Select";
import { DatePicker, DatePickerProps } from "./DatePicker/DatePicker";

export type DropDownProps =
  | { type?: "date" | "select" } & (SelectProps & DatePickerProps);

export const DropDown: React.FC<DropDownProps> = ({
  type,
  options,
  initialValue,
  a,
}) =>
  type === "date" ? (
    <DatePicker a={a} />
  ) : (
    <Select options={options} initialValue={initialValue} />
  );
