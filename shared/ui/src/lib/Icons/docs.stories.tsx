import React from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';
import { Flex, Text } from '@chakra-ui/react';


import {
  Icon,
  IconAccounting,
  IconLandscape,
  IconOrder,
  IconParagraph,
  IconPortrait,
  IconSafety,
  IconSettings,
  IconSortAsc,
  IconSortDesc,
  IconTools,
  IconUserLock,
  IconWarning,
} from './';

export default {
  title: 'Components/Icons',
};

export const ReactIcons = () => (
  <Text>
    This is an icon in text <Icon icon={BiMessageAltDetail} /> from react-icons.
  </Text>
);


export const AllCustomIcons = () => (
  <Flex flexWrap="wrap" fontSize="2rem" color="gray.500">
      <IconAccounting />
      <IconOrder />
      <IconSafety />
      <IconSettings />
      <IconTools />
      <IconSortAsc />
      <IconSortDesc />
      <IconUserLock />
      <IconParagraph />
      <IconWarning />
      <IconLandscape />
      <IconPortrait />
    </Flex>
);

export const IconsWithNotifications = () => (
  <>
    <Flex flexWrap="wrap" fontSize="1rem" color="gray.500">
      <Icon icon={BiMessageAltDetail} withNotifications notificationsColor="success.500" />
      <Icon icon={BiMessageAltDetail} withNotifications />
    </Flex>
    <Flex flexWrap="wrap" fontSize="2rem" color="gray.500">
      <Icon icon={BiMessageAltDetail} withNotifications notificationsColor="success.500" />
      <Icon icon={BiMessageAltDetail} withNotifications />
    </Flex>
  </>
);
