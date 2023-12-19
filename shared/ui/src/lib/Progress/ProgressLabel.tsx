import { FC, ReactChild, ReactNode, useContext } from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { ProgressContext, ProgressPropsType } from '.';

export interface ProgressLabelProps extends Omit<TextProps, 'children'> {
  children: ReactNode | ((data: ProgressPropsType) => ReactChild);
}

export const ProgressLabel: FC<ProgressLabelProps> = ({ children, ...others }) => {
  const progressData = useContext(ProgressContext);
  return (
    <Text fontWeight="medium" color="gray.500" {...others}>
      {typeof children === 'function' ? children(progressData) : children}
    </Text>
  );
};
