// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '4em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
    outline: {
      type: 'boolean',
    },
    label: {
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <b>Bolda</b>,
        Italic: <i>Italic</i>,
      },
    },
  },
  args: {
    fullWidth: true,
    label: {},
  },
} as Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ],
  args: {
    intent: 'primary',
    children: 'Click Me',
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    intent: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    intent: 'danger',
  },
};
