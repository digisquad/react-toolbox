import React from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Tools',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M7.269 2.001a5.25 5.25 0 015.005 6.839l9.067 9.38a2.344 2.344 0 11-3.37 3.258l-8.963-9.272A5.25 5.25 0 012.222 5.8a.75.75 0 011.251-.323L6.659 8.66l2.06-2.06-3.16-3.162a.75.75 0 01.333-1.254c.44-.12.902-.183 1.378-.183z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconTools = (props) => {
  return <Icon icon={SvgIcon} {...props} />;
};
