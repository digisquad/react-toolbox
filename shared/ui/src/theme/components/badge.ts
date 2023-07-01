import { GlobalStyleProps } from '@chakra-ui/theme-tools';

export default {
  baseStyle: {
    lineHeight: 'tall',
  },
  sizes: {
    xs: {
      fontSize: '0.50rem',
      py: '1px',
      px: '0.15rem',
      lineHeight: 'shorter',
    },
    sm: {
      fontSize: '0.65rem',
      py: '1px',
      px: '0.2rem',
      lineHeight: 'shorter',
    },
    md: {
      fontSize: '0.7rem',
      textTransform: 'none',
      px: '0.4rem',
    },
    lg: {
      fontSize: '0.85rem',
      textTransform: 'none',
      px: '0.5rem',
    },
  },
  variants: {
    subtle: ({ colorScheme }: GlobalStyleProps) => {
      if (colorScheme === 'brandSecondary') {
        return {
          bg: 'brandSecondary.50',
        };
      }
    },
  },
  defaultProps: {
    size: 'md',
  },
};
