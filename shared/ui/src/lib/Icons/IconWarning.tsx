import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Warning',
  viewBox: '0 0 24 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.86 1a1 1 0 00-.707.293l-5.86 5.86A1 1 0 001 7.86v8.28a1 1 0 00.293.707l5.86 5.86A1 1 0 007.86 23h8.28a1 1 0 00.707-.293l5.86-5.86A1 1 0 0023 16.14V7.86a1 1 0 00-.293-.707l-5.86-5.86A1 1 0 0016.14 1H7.86zm5.625 6.583c0-.874-.668-1.583-1.492-1.583-.825 0-1.493.709-1.493 1.583v4.084c0 .874.668 1.583 1.492 1.583.825 0 1.493-.709 1.493-1.583V7.583zm-1.492 7.25c-.825 0-1.493.71-1.493 1.584 0 .874.668 1.583 1.492 1.583h.015c.825 0 1.493-.709 1.493-1.583 0-.875-.668-1.584-1.492-1.584h-.015z"
      fill="currentColor"
    />
  ),
});

export const IconWarning: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
