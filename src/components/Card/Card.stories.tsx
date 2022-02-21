import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dispatcher/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DesktopCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DesktopCard.args = {
  img: "https://i.natgeofe.com/k/8fd6eca1-0808-4e4a-ac49-bb87f8821a0b/first-olympics-textimage_2_4x3.jpg",
  content:
    "Make it five for Caeleb Dressel.\r\nThe American star won his fifth gold medal of the Tokyo Games, finishing off one of the great performances in Olympic history. He joins an elite club of just four ot… [+1179 chars]",
  date: new Date("Friday Jun 25, 2021"),
  tags: ["sport", "news", "+2"],
  header:
    "Caeleb Dressel joins elite club with 5th Olympic gold medal - Fox News",
  source: "Associated Press, Fox News",
};
