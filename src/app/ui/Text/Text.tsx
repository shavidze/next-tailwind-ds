import { cva, VariantProps } from 'class-variance-authority';

const textStyles = cva([], {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
    weight: {
      light: 'font-light',
      normal: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps extends Omit<TextStylesProps, 'size' | 'weigth'> {
  variant: `${NonNullable<TextStylesProps['size']>} / ${NonNullable<
    TextStylesProps['weight']
  >}`;
}
