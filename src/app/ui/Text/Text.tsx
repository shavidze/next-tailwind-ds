import { cva } from 'class-variance-authority';

const textStyles = cva([], {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
  },
});
