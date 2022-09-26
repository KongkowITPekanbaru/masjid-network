import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '../design-system/components/box';

export default {
  title: 'masjid-network/Box',
  component: Box,
  argTypes: {
    padding: {
        control: 'select',
        options: ['small', 'medium', 'large']
    },
    margin: {
        control: 'select',
        options: ['small', 'medium', 'large']
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
    <div>
        <Box {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Box',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  children: 'Box',
  padding: 'small',
  border: '1px solid red',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  children: 'Box',
  margin: 'small',
  border: '1px solid red',
};