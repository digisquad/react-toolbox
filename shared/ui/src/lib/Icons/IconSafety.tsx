import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Safety',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M19.714 9.5H18.43V3.25c0-.688-.579-1.25-1.286-1.25H6.857c-.707 0-1.286.563-1.286 1.25V9.5H4.286C3.579 9.5 3 10.063 3 10.75v10c0 .688.579 1.25 1.286 1.25h15.428c.707 0 1.286-.563 1.286-1.25v-10c0-.688-.579-1.25-1.286-1.25zm-6.428 8.75h-2.572l.56-2.719a1.237 1.237 0 01-.56-1.031c0-.69.576-1.25 1.286-1.25.71 0 1.286.56 1.286 1.25 0 .429-.221.806-.56 1.031l.56 2.719zm2.571-8.75H8.143v-5h7.714v5z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconSafety: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
