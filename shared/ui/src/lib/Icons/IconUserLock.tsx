import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'UserLock',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.614 13.88H6.02c-1.596 0-3.127.609-4.256 1.693A5.67 5.67 0 000 19.663v2.313c0 .639.539 1.157 1.204 1.157.665 0 1.204-.518 1.204-1.157v-2.313c0-.92.38-1.803 1.057-2.454a3.687 3.687 0 012.554-1.016h4.963c.436-.842.986-1.62 1.632-2.314zM10.834 2.313c-1.995 0-3.611 1.554-3.611 3.47 0 1.916 1.616 3.47 3.61 3.47 1.995 0 3.612-1.554 3.612-3.47 0-1.916-1.617-3.47-3.611-3.47zm-6.019 3.47C4.815 2.59 7.51 0 10.834 0c3.324 0 6.019 2.59 6.019 5.783 0 3.194-2.695 5.783-6.02 5.783-3.323 0-6.018-2.589-6.018-5.783zM12.564 18.4c0-1.04.864-1.918 1.973-1.918h7.49c1.109 0 1.973.878 1.973 1.919v3.68C24 23.122 23.136 24 22.027 24h-7.49c-1.109 0-1.973-.878-1.973-1.919v-3.68z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.282 12.547c-.366 0-.74.154-1.031.465a1.814 1.814 0 00-.474 1.238v3.1c0 .478-.404.867-.902.867-.499 0-.903-.389-.903-.868v-3.1c0-.883.328-1.747.937-2.397a3.252 3.252 0 012.373-1.04c.91 0 1.762.387 2.374 1.04a3.51 3.51 0 01.937 2.398v3.1c0 .478-.405.867-.903.867-.499 0-.903-.389-.903-.868v-3.1c0-.479-.18-.922-.474-1.237a1.414 1.414 0 00-1.03-.465z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconUserLock: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
