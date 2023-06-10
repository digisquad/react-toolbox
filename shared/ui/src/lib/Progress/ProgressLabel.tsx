import { FC, ReactChild, useContext } from 'react';

import { Text, TextProps } from '@chakra-ui/react';

import { ProgressContext, ProgressPropsType } from '.';

export interface ProgressLabelProps extends TextProps {
  children(data: ProgressPropsType): ReactChild;
}

export const ProgressLabel: FC<ProgressLabelProps> = ({ children, ...others }) => {
  const progressData = useContext(ProgressContext);
  return (
    <Text fontWeight="medium" color="gray.500" {...others}>
      {children({
        ...progressData,
      })}
    </Text>
  );
};
