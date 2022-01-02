import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropDown } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dispatcher/Drop Down",
  component: DropDown,
} as ComponentMeta<React.FC>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => (
  <div style={{ width: "200px", height: "50px" }}>
    <DropDown {...args} />
  </div>
);

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  initialValue: "Select",
  options: ["1", "2"],
};
export const DatePicker = Template.bind({});
DatePicker.args = {
  initialDate: new Date(),
};
