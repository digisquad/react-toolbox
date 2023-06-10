import React from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Landscape',
  viewBox: '0 0 16 16',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.748 13.414A2 2 0 0015.332 12V6.667a.666.666 0 00-.195-.472l-4-4A.667.667 0 0010.667 2h-8a2 2 0 00-2 2v8a2 2 0 002 2h10.666a2 2 0 001.415-.586zM14 12a.667.667 0 01-.667.667H2.667A.667.667 0 012 12V4a.667.667 0 01.667-.667H10v3.334c0 .368.298.666.667.666H14V12zm-.943-6l-1.724-1.724V6h1.724z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.862 5.529c.26-.26.682-.26.943 0l2.333 2.333a.665.665 0 01.195.47v.003a.665.665 0 01-.194.468l-.001.002-2.333 2.333a.667.667 0 01-.943-.943L7.057 9H4a.667.667 0 010-1.333h3.057L5.862 6.47a.667.667 0 010-.942z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconLandscape = (props) => {
  return <Icon icon={SvgIcon} {...props} />;
};
