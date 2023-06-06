import { cva } from 'class-variance-authority';

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
