import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Order',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M15.857 7h4.663a7.96 7.96 0 00-.367-.526 17.895 17.895 0 00-1.751-1.948 18.1 18.1 0 00-2.004-1.702c-.199-.143-.379-.26-.54-.358V7z"
        fill="currentColor"
      />
      <path
        d="M15.214 8.25a.634.634 0 01-.643-.625V2H4.607C3.721 2 3 2.701 3 3.563v16.875C3 21.297 3.721 22 4.607 22h14.786c.886 0 1.607-.701 1.607-1.563V8.25h-5.786zm1.286 10h-9a.634.634 0 01-.643-.625c0-.345.288-.625.643-.625h9c.355 0 .643.28.643.625a.634.634 0 01-.643.625zm0-2.5h-9a.634.634 0 01-.643-.625c0-.345.288-.625.643-.625h9c.355 0 .643.28.643.625a.634.634 0 01-.643.625zm0-2.5h-9a.634.634 0 01-.643-.625c0-.345.288-.625.643-.625h9c.355 0 .643.28.643.625a.634.634 0 01-.643.625z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconOrder: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
