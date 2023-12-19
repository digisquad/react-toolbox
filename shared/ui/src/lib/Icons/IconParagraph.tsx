import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Paragraph',
  viewBox: '0 0 26 26',
  path: (
    <>
      <path
        d="M6.897 21a.872.872 0 01-.644-.253.872.872 0 01-.253-.644V3.934c0-.26.084-.475.253-.644a.872.872 0 01.644-.253h6.6c1.135 0 2.139.253 3.013.759a5.255 5.255 0 012.047 2.047c.49.874.736 1.886.736 3.036 0 1.12-.245 2.116-.736 2.99a5.465 5.465 0 01-2.047 2.047c-.874.49-1.878.736-3.013.736H7.794v5.451c0 .26-.084.475-.253.644a.872.872 0 01-.644.253zm.897-8.073h5.703c.782 0 1.48-.169 2.093-.506a3.701 3.701 0 001.426-1.449c.353-.613.529-1.311.529-2.093 0-.813-.176-1.526-.529-2.139a3.7 3.7 0 00-1.426-1.449c-.613-.353-1.311-.529-2.093-.529H7.794v8.165z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconParagraph: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
