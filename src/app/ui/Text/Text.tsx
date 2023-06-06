import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

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
  children?: ReactNode;
}

export function Text({ variant, children, ...props }: TextProps) {
  const [size, weight] = variant.split('/') as [
    TextStylesProps['size'],
    TextStylesProps['weight']
  ];
  return (
    <div className={textStyles({ size, weight, ...props })}>{children}</div>
  );
}
