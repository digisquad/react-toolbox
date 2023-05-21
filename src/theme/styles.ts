import { GlobalStyleProps } from '@chakra-ui/theme-tools';
import colorMode from './foundations/colors/color-mode';


export const styles = {
  global: (props: GlobalStyleProps) => ({
    html: {
      minHeight: '100%',
      bg: colorMode(['gray.50'])(props),
    },
    body: {
      minHeight: '100%',
      bg: colorMode(['gray.50'])(props),
      WebkitTapHighlightColor: 'transparent',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
    '.ql-editor': {
      h1: {
        fontSize: '2xl',
      },
      h2: {
        fontSize: 'xl',
      },
      h3: {
        fontSize: 'lg',
      },
    },
  }),
};
