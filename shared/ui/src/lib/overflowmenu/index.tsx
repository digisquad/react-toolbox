import React, { FC } from 'react';

import { IconButton, IconButtonProps, forwardRef } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

export interface OverflowMenuProps extends Omit<IconButtonProps, 'aria-label'> {}

export const OverflowMenu: FC<OverflowMenuProps> = forwardRef(({ ...rest }, ref: any) => {
  return (
    <IconButton
      ref={ref}
      d="inline-flex"
      borderRadius="full"
      variant="ghost"
      color="inherit"
      colorScheme="gray"
      bg="transparent"
      opacity="0.5"
      _hover={{ opacity: 1, bg: 'rgba(0, 0, 0, 0.05)' }}
      _focus={{ opacity: 1, boxShadow: 'outline' }}
      _active={{ bg: 'rgba(0, 0, 0, 0.1)' }}
      icon={<FiMoreVertical />}
      aria-label="Actions"
      {...rest}
    />
  );
});

OverflowMenu.displayName = 'OverflowMenu';
