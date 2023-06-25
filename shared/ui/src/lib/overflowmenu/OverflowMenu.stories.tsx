import React from 'react';
import { Box, Flex, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { FiCopy, FiEdit, FiTrash2, FiUserPlus } from 'react-icons/fi';

import { OverflowMenu } from './index';

export default {
  title: 'Components/OverflowMenu',
};

export const Default = () => <OverflowMenu />;

export const DarkBackground = () => (
  <Box p="4" color="white" bg="gray.800">
    <OverflowMenu />
  </Box>
);
DarkBackground.parameters = {
  docs: {
    description: {
      story: 'some story **markdown**',
    },
  },
};

export const UsageWithMenu = () => (
  <Menu isLazy placement="left-start">
    <MenuButton as={OverflowMenu} />
    <MenuList>
      <MenuItem icon={<Icon as={FiEdit} fontSize="lg" color="gray.400" />}>Edit</MenuItem>
      <MenuItem icon={<Icon as={FiCopy} fontSize="lg" color="gray.400" />}>Duplicate</MenuItem>
      <MenuDivider />
      <MenuItem icon={<Icon as={FiTrash2} fontSize="lg" color="gray.400" />}>Delete</MenuItem>
    </MenuList>
  </Menu>
);
UsageWithMenu.decorators = [
  (Story: any) => (
    <Flex h="12rem" justify="flex-end">
      <Story />
    </Flex>
  ),
];
