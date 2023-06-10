import React from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Portrait',
  viewBox: '0 0 16 16',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.586 1.252A2 2 0 014 .667h5.333c.177 0 .347.07.472.195l4 4a.666.666 0 01.195.471v8a2 2 0 01-2 2H4a2 2 0 01-2-2V2.667a2 2 0 01.586-1.415zM4 2a.667.667 0 00-.667.667v10.666A.667.667 0 004 14h8a.667.667 0 00.667-.667V6H9.333a.667.667 0 01-.666-.667V2H4zm6 .943l1.724 1.724H10V2.942z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.805 9.528c.26.26.26.683 0 .943L8.47 12.805a.666.666 0 01-.469.195h-.004a.664.664 0 01-.468-.194l-.001-.001-2.334-2.334a.667.667 0 11.943-.943l1.195 1.196V7.666a.667.667 0 011.334 0v3.058l1.195-1.196c.26-.26.682-.26.943 0z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconPortrait = (props) => {
  return <Icon icon={SvgIcon} {...props} />;
};
