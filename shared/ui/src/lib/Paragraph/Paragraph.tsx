import React from 'react';
import { Box, Heading, Text, Icon as ChakraIcon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface TechnologyChoiceProps {
  icon: IconType;
  title: string;
  description: string;
}

const Paragraph: React.FC<TechnologyChoiceProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box flex="1 0 20%" p={4}>
      <Heading as="h3" size="sm" mb={2}>
        <ChakraIcon as={icon} mr="2" /> {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default Paragraph;
