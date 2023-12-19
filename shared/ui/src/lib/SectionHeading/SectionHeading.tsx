import React, { ReactNode } from 'react';
import { Heading, Text } from '@chakra-ui/react';

interface SectionHeadingProps {
  color: string;
  children: ReactNode;
  htmlComponent: "h1" |"h2";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  color,
  children,
  htmlComponent = 'h1',
}) => {
  return (
    <Heading as={htmlComponent}>
      <Text as="span" color={color}>
        {children}
      </Text>
    </Heading>
  );
};

export default SectionHeading;
