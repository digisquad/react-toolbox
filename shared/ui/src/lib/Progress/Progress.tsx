import React, { FC, createContext } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

export const ProgressContext = createContext<ProgressPropsType>(null);

export interface ProgressPropsType {
  completed?: number;
  total?: number;
}

export interface ProgressProps extends StackProps, ProgressPropsType {}

export const Progress: FC<ProgressProps> = ({ completed = 0, total, ...rest }) => {
  return (
    <ProgressContext.Provider
      value={{
        completed,
        total,
      }}
    >
      <Stack spacing={1} {...rest} />
    </ProgressContext.Provider>
  );
};
