import { FC, useContext } from 'react';

import { Progress, ProgressProps } from '@chakra-ui/react';

import { ProgressContext } from '.';

export const ProgressBar: FC<ProgressProps> = (props) => {
  const { completed, total } = useContext(ProgressContext);
  if (!total) {
    return null;
  }
  return (
    <Progress
      value={(completed / total) * 100}
      borderRadius="lg"
      backgroundColor="gray.200"
      colorScheme="accent"
      height="1"
      {...props}
    />
  );
};
