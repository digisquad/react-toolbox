import React from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon } from './Icon';

const SvgIcon = createIcon({
  displayName: 'SortDesc',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M17.774 13c1.051 0 1.613 1.268.92 2.077l-5.405 6.324a1.687 1.687 0 01-2.578 0l-5.406-6.324c-.692-.81-.13-2.077.921-2.077h11.548z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.87 9h8.26L12 4.169 7.87 9zm2.84-6.401a1.687 1.687 0 012.58 0l5.405 6.324c.692.81.13 2.077-.921 2.077H6.226c-1.051 0-1.613-1.268-.92-2.077l5.405-6.324z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconSortDesc = (props) => {
  return <Icon icon={SvgIcon} {...props} />;
};
