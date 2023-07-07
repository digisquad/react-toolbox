import React from 'react';

import { Badge, BadgeProps, Divider, Stack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

import { Icon } from '../Icons';
import Maybe from "@lib/hoc/Maybe";

interface BadgeIndicatorProps extends BadgeProps {
  icon?: IconType;
  label: string;
  count: number;
}

const BadgeIndicator: React.FC<BadgeIndicatorProps> = ({
  icon,
  label,
  count,
  colorScheme = 'brandSecondary',
  ...rest
}) => {
  const isDisabled = count <= 0;
  const colorCurrent = isDisabled ? 'gray' : colorScheme;

  return (
    <Badge
      colorScheme={colorCurrent}
      bg={`${colorCurrent}.50`}
      color={isDisabled ? `${colorCurrent}.400` : `${colorCurrent}.700`}
      {...rest}
    >
      <Stack direction="row" alignItems="center" spacing={1} py={icon ? undefined : '0.2rem'}>
        <Maybe condition={icon} >
          <Icon icon={icon} fontSize="md" />
        </Maybe>
        <Maybe condition={label} >
          <Text key="text" fontSize="xs" fontWeight="bold" px="1">
            {label}
          </Text>,
          <Divider key="divider" orientation="vertical" w={1} h="0.7rem" borderColor={`${colorScheme ?? colorCurrent}.300`} />
        </Maybe>
        <Text fontSize="xs">{count && !Number.isNaN(count) ? count : '-'}</Text>
      </Stack>
    </Badge>
  );
};

export default BadgeIndicator
