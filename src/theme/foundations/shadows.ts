import { transparentize } from '@chakra-ui/theme-tools';

import { colors } from './colors/colors';

const createOutline = (colorScheme = 'gray') => `0 0 0 3px ${transparentize(`${colorScheme}.500`, 0.3)({ colors })}`;

export const shadows = {
  subtle: '0px 2px 16px rgba(0, 0, 0, 0.05)',
  'top-bar': '0 4px 20px rgba(0, 0, 0, 0.05)',
  'bottom-bar': '0 -4px 20px rgba(0, 0, 0, 0.05)',
  outline: createOutline(),
  'outline-brand': createOutline('brand'),
  'outline-accent': createOutline('accent'),
  'outline-gray': createOutline('gray'),
  'outline-error': createOutline('error'),
  'outline-warning': createOutline('warning'),
  'outline-success': createOutline('success'),
};
