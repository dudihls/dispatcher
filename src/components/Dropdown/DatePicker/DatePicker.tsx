export type DatePickerProps = {
  a?: "datepicker";
};

export const DatePicker: React.FC<DatePickerProps> = (
  props: DatePickerProps
) => {
  return <div>{props.a}</div>;
};
