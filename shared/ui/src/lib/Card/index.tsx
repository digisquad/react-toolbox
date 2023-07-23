import {
  Box,
  Button,
  Image,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

interface CardProps {
  image: string;
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  content,
  buttonText,
  onButtonClick,
}) => {
  console.log(image);
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
      <Image roundedTop="lg" w="full" fit="cover" src={image} />
      <Heading as="h2" fontWeight="bold" fontSize="xl" mb="4" color="brand.900">
        {title}
      </Heading>
      <Box color="#333333" paddingBottom="1em">
        {content}
      </Box>
      {buttonText && (
        <Button
          variant="@primary"
          mt="4"
          borderRadius="full"
          width="100%"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default Card;
