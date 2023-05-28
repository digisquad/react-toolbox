import { tabsAnatomy } from '@chakra-ui/anatomy';
import { PartsStyleObject } from '@chakra-ui/theme-tools';

const variantLine: PartsStyleObject<typeof tabsAnatomy> = {
  tablist: { borderBottom: 'none' },
};

const baseStyle: PartsStyleObject<typeof tabsAnatomy> = {
  tab: { fontWeight: 'medium' },
};

const sizes: Record<string, PartsStyleObject<typeof tabsAnatomy>> = {
  md: { tab: { py: 3 } },
};
export default {
  variants: {
    line: variantLine,
  },
  defaultProps: {
    colorScheme: 'brand',
  },
  baseStyle,
  sizes,
};
