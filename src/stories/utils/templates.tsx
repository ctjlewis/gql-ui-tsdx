import { Story } from "@storybook/react";
import React, { FC } from "react";

export const bindMany = <T extends Function>(fn: T, n: number): T[] => {
  const bound = new Array(n);

  let i = 0;
  while (i < n) {
    bound[i++] = fn.bind({});
  }

  return bound;
}

export const generateTemplate = (Component: FC): Story => {
  const Template: Story = (args) => (
    <Component {...args} />
  );
  return Template;
};

export const generateTemplates = (Component: FC, n: number): Story[] => {
  const template = generateTemplate(Component);
  return bindMany(template, n);
}