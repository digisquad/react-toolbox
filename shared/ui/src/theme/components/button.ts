import { Color, Scheme } from '@theme/types/css';
import { GlobalStyleProps } from '@chakra-ui/theme-tools';

interface CustomVariant {
  bg: Color
  bgHover?: Color
  bgActive?: Color
  color: Color
  colorHover?: Color
  boxShadowFocus?: string
  borderColor?: string
}
const customVariant = ({
  bg,
  bgHover = bg,
  bgActive = bgHover,
  color,
  colorHover = color,
  boxShadowFocus = 'outline',
  borderColor = 'transparent',
}: CustomVariant) => {
  return {
    bg,
    color,
    borderColor,
    _focus: {
      boxShadow: boxShadowFocus,
    },
    _hover: {
      bg: bgHover,
      color: colorHover,
      _disabled: {
        bg,
      },
    },
    _active: { bg: bgActive },
  };
};

export default {
  baseStyle: {
    border: '1px solid',
    borderColor: 'transparent',
  },
  variants: {
    // Custom variants
    '@primary': customVariant({
      bg: 'accent.600',
      bgHover: 'accent.700',
      bgActive: 'accent.800',
      color: 'white',
      boxShadowFocus: 'outline-accent',
    }),
    '@secondary': customVariant({
      bg: 'brand.50',
      bgHover: 'brand.100',
      bgActive: 'brand.200',
      color: 'brand.600',
      colorHover: 'brand.700',
      boxShadowFocus: 'outline-brand',
    }),
    '@danger': customVariant({
      bg: 'error.50',
      bgHover: 'error.100',
      bgActive: 'error.200',
      color: 'error.600',
      colorHover: 'error.700',
      boxShadowFocus: 'outline-error',
    }),
    '@warning': customVariant({
      bg: 'warning.50',
      bgHover: 'warning.100',
      bgActive: 'warning.200',
      color: 'warning.700',
      colorHover: 'warning.800',
      boxShadowFocus: 'outline-warning',
    }),
    '@white': customVariant({
      bg: 'white',
      bgHover: 'brand.100',
      bgActive: 'brand.200',
      color: 'brand.600',
      colorHover: 'brand.700',
      boxShadowFocus: 'outline-brand',
      borderColor: 'gray.200',
    }),
    '@whiteNeutral': customVariant({
      bg: '#111',
      bgHover: 'gray.200',
      bgActive: 'gray.300',
      color: 'gray.600',
      colorHover: 'gray.700',
      boxShadowFocus: 'outline-gray',
      borderColor: 'gray.200',
    }),
    '@accentLink': customVariant({
      bg: 'transparent',
      color: 'gray.600',
      colorHover: 'brand.700',
    }),
    '@bordered': ({ colorScheme }: GlobalStyleProps) =>
      customVariant({
        bg: `${colorScheme as Scheme}.100`,
        bgHover: `${colorScheme as Scheme}.200`,
        color: `${colorScheme as Scheme}.700`,
        colorHover: `${colorScheme as Scheme}.800`,
        borderColor: `${colorScheme as Scheme}.200`,
      }),

    // Default variants
    solid: ({ colorScheme }: GlobalStyleProps) => ({
      bg: colorScheme === 'gray' ? `${colorScheme}.100` : `${colorScheme}.600`,
      _hover: {
        bg: colorScheme === 'gray' ? `${colorScheme}.200` : `${colorScheme}.700`,
      },
    }),
    ghost: ({ colorScheme }: GlobalStyleProps) => ({
      bg: `${colorScheme}.50`,
      _hover: {
        bg: `${colorScheme}.100`,
        _disabled: {
          bg: `${colorScheme}.50`,
        },
      },
    }),
    link: ({ colorScheme = 'gray' }: GlobalStyleProps) => ({
      color: `${colorScheme}.500`,
      border: 'none',
      lineHeight: 'lg',
      textDecoration: 'underline',
      _hover: {
        textDecoration: 'none',
      },
      _focus: {
        textDecoration: 'none',
        boxShadow: `outline-${colorScheme}`,
      },
    }),
  },
};
