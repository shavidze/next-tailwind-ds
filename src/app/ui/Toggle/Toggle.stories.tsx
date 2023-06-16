// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: 'UI/Toggle',
  component: Toggle,
  args: {},
} as Meta<typeof Toggle>;
type Story = StoryObj<typeof Toggle>;

export const TogglePrimary: Story = {
  args: {},
};
