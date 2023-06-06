/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import { Text, type TextProps } from './Text';

export default {
  title: 'UI/Text',
  component: Text,
  args: {},
} as Meta<typeof Text>;
type StoryProps = {
  variants: TextProps['variant'][];
};
export const Small = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Text variant={variant} key={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
  args: {
    variants: ['small/light', 'small/normal', 'small/semibold'],
  },
};

export const Medium = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Text variant={variant} key={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
  args: {
    variants: ['medium/light', 'medium/normal', 'medium/semibold'],
  },
};

export const Large = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Text variant={variant} key={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
  args: {
    variants: ['large/light', 'large/normal', 'large/semibold'],
  },
};
