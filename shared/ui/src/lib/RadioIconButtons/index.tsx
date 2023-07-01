import { FC } from 'react';

import { Box, BoxProps, Flex, StackProps, UseRadioGroupProps, useRadio, useRadioGroup } from '@chakra-ui/react';

import { Icon } from '../Icons';

export type RadioIconButtonProps = BoxProps

export const RadioIconButton = ({ children, ...rest }) => {
  const { getInputProps, getCheckboxProps, htmlProps } = useRadio(rest);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      bg="white"
      color="gray.400"
      py={0.5}
      px={2}
      _notFirst={{
        marginLeft: '1px',
      }}
      _checked={{
        bg: 'brand.50',
        color: 'brand.600',
      }}
      cursor="pointer"
      {...checkbox}
      {...htmlProps}
    >
      <input {...input} />
      <Icon icon={children} />
    </Box>
  );
};

export interface Option {
  icon: React.ReactNode;
  value: string;
}

export interface RadioIconButtonsProps extends UseRadioGroupProps, Omit<StackProps, 'defaultValue' | 'onChange'> {
  options: Array<Option>;
}

export const RadioIconButtons: FC<RadioIconButtonsProps> = ({ options, name, value, onChange, ...rest }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    value,
    onChange,
  });

  const group = getRootProps();

  return (
    <Flex>
      <Flex
        {...group}
        {...rest}
        bg="gray.200"
        borderColor="gray.300"
        borderWidth="1px"
        borderStyle="solid"
        borderRadius="md"
        overflow="hidden"
        _focusWithin={{
          boxShadow: 'outline',
        }}
      >
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });

          return (
            <RadioIconButton key={option.value} {...radio}>
              {option.icon}
            </RadioIconButton>
          );
        })}
      </Flex>
    </Flex>
  );
};
