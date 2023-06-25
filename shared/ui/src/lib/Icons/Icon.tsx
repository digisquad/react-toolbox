import React, { FC } from 'react';

import { Box, BoxProps, Icon as ChakraIcon, IconProps as ChakraIconProps, forwardRef } from '@chakra-ui/react';

export interface IconProps extends BoxProps {
  icon: FC;
  iconProps?: ChakraIconProps;
  withNotifications?: boolean;
  notificationsColor?: string;
}

export const Icon: FC<IconProps> = forwardRef(
  ({ icon: IconEl, iconProps, children, withNotifications = false, notificationsColor = 'red.500', ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        as="span"
        d="inline-block"
        position="relative"
        w="1em"
        flex="none"
        _before={{
          content: '"."',
          visibility: 'hidden',
        }}
        {...rest}
      >
        <ChakraIcon
          as={IconEl}
          w="1em"
          h="1em"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          {...iconProps}
        />
        {withNotifications && (
          <Box
            boxSize="0.4em"
            borderRadius="0.4em"
            bg={notificationsColor}
            position="absolute"
            transform="translate(0.3em, -0.3em)"
            m="auto"
            inset="0"
          />
        )}
        {children}
      </Box>
    );
  }
);
