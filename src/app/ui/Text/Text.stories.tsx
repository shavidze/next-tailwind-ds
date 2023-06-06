import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'UI/Text',
  component: Text,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    intent: 'small/bold',
    children: 'Hello, This is a text',
  },
} as Meta<typeof Text>;
type Story = StoryObj<typeof Text>;

export const TextSmallAndBold: Story = {
  args: {
    variant: 'small/bold',
    children: 'Smal and Bold Text',
  },
};
