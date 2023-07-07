import { Box, Button, useColorModeValue } from '@chakra-ui/react';

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      borderWidth="1px"
      borderRadius="lg"
      padding="4"
      maxWidth="300px"
      margin="auto"
      textAlign="center"
    >
      <Box as="h2" fontWeight="bold" fontSize="xl" mb="4">
        {title}
      </Box>
      <Box>{content}</Box>
      <Button variant="@primary" mt="4" borderRadius="full" width="100%" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default Card;
