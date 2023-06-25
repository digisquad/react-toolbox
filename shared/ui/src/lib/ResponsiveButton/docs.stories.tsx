import React from 'react';

import { Stack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

import { ResponsiveButton } from '.';

export default {
  title: 'components/ResponsiveButton',
};

export const Default = () => {
  return (
    <Stack spacing={5}>
      <ResponsiveButton
        hideTextBreakpoints={{
          base: true,
          sm: false,
          md: true,
          lg: false,
          xl: true,
        }}
        icon={<FiPlus />}
      >
        Add Item
      </ResponsiveButton>
    </Stack>
  );
};
