import { Button, ButtonProps, IconButton } from '@chakra-ui/button';
import { useBreakpointValue } from '@chakra-ui/media-query';

interface BreakpointsProps {
  base?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}
interface ResponsiveButtonProps extends ButtonProps {
  hideTextBreakpoints?: BreakpointsProps;
  icon: React.ReactElement;
  children?: string;
  iconPosition?: 'left' | 'right';
  to?: string;
}

export const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  hideTextBreakpoints = {
    base: true,
    md: false,
  },
  children,
  icon,
  iconPosition = 'left',
  ...rest
}) => {
  const responsiveStates = useBreakpointValue(hideTextBreakpoints);

  return responsiveStates ? (
    <IconButton aria-label={children} icon={icon} {...rest} />
  ) : (
    <Button {...(iconPosition === 'right' ? { rightIcon: icon } : { leftIcon: icon })} {...rest}>
      {children}
    </Button>
  );
};
