import React from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Accounting',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M9.6 3H3.267A1.27 1.27 0 002 4.267V10.6c0 .697.57 1.267 1.267 1.267H9.6a1.27 1.27 0 001.267-1.267V4.267A1.27 1.27 0 009.6 3zm0 5.067H3.267V6.8H9.6v1.267zM19.733 3H13.4a1.27 1.27 0 00-1.267 1.267v16.466c0 .697.57 1.267 1.267 1.267h6.333A1.27 1.27 0 0021 20.733V4.267A1.27 1.27 0 0019.733 3zm0 11.4H13.4v-1.267h6.333V14.4zm0-3.8H13.4V9.333h6.333V10.6zM9.6 13.133H3.267A1.27 1.27 0 002 14.4v6.333C2 21.43 2.57 22 3.267 22H9.6a1.27 1.27 0 001.267-1.267V14.4A1.27 1.27 0 009.6 13.133zm0 5.067H7.067v2.533H5.8V18.2H3.267v-1.267H5.8V14.4h1.267v2.533H9.6V18.2z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconAccounting = (props) => {
  return <Icon icon={SvgIcon} {...props} />;
};
