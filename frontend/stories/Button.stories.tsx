import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../design-system/components/button';

export default {
  title: 'masjid-network/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SolidVariant = Template.bind({});
SolidVariant.args = {
  variant: 'solid',
  children: 'Button',
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  variant: 'outline',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};
