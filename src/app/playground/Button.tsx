import { Button as ChakraButton } from '@chakra-ui/react';

const Button = () => {
  return (
    <>
      <ChakraButton variant="@primary" mr={6}>
        save
      </ChakraButton>
      <ChakraButton variant="@secondary" mr={6}>
        save
      </ChakraButton>
      <ChakraButton variant="@danger" mr={6}>
        save
      </ChakraButton>
      <ChakraButton variant="@warning" mr={6}>
        save
      </ChakraButton>
    </>
  );
};

export default Button;
