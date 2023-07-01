import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction, PartsStyleObject } from '@chakra-ui/theme-tools';

import { layout } from '@/theme/foundations/layout';

const baseStyle: PartsStyleFunction<typeof parts> = () => {
  return {
    dialogContainer: {
      // "center" => isCentered === true
      alignItems: 'center',
      // scrollBehavior === inside
      overflow: 'hidden',
    },
    dialog: {
      mx: { base: 0, [layout.breakpoints.desktop]: 8 },
      // full en mobile, sinon pour scrollBehavior === inside
      minH: { base: 'full', [layout.breakpoints.desktop]: 'fit-content' },
      maxH: { base: 'full', [layout.breakpoints.desktop]: 'calc(100% - 7.5rem)' },
      minW: { base: 'full', [layout.breakpoints.desktop]: 'fit-content' },
      maxW: { base: 'full', [layout.breakpoints.desktop]: undefined },
    },
    header: {
      color: 'brandSecondary.700',
      px: 5,
      pt: 5,
      bg: 'white',
      borderTopRadius: { base: 'none', [layout.breakpoints.desktop]: 'md' },
    },
    body: {
      py: 5,
      // scrollBehavior === inside
      overflow: 'auto',
    },
    footer: {
      p: 5,
      bg: 'white',
      borderBottomRadius: { base: 'none', [layout.breakpoints.desktop]: 'md' },
    },
  };
};

interface ModalPartsSizesObject {
  [size: string]: PartsStyleObject<typeof parts>;
}

const sizes: ModalPartsSizesObject = {
  full: {
    dialog: {
      maxW: { base: 'full', [layout.breakpoints.desktop]: '95vw', '2xl': '80vw' },
      minH: { base: 'full', [layout.breakpoints.desktop]: '95vh' },
      maxH: { base: 'full', [layout.breakpoints.desktop]: '95vh' },
      my: { base: 0, [layout.breakpoints.desktop]: '2rem' },
      mx: { base: 0, [layout.breakpoints.desktop]: '2rem' },
      // For fix my on Chrome
    },
    dialogContainer: {
      // "center" => isCentered === true
      alignItems: 'center',
    },
    header: {
      shadow: 'top-bar',
      zIndex: 0, // Fixe la shadow cachée sous le body
    },
    body: {
      bg: 'gray.100',
    },
    footer: {
      shadow: 'bottom-bar',
    },
  },
  'fit-content': {
    dialog: {
      mx: 4,
      minH: undefined,
      maxH: undefined,
      minW: undefined,
      maxW: undefined,
      width: 'fit-content',
      height: 'fit-content',
    },
    header: {
      borderTopRadius: 'md',
    },
    footer: {
      borderBottomRadius: 'md',
    },
  },
};

export default {
  baseStyle,
  sizes,
};
