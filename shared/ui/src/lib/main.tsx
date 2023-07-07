import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Link,
  VStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Main = () => {
  return (
    <Box p={8}>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            React toolbox
            <br />
            <Text as={'span'} color="#0582d2">
              cutting-edge web template
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            React toolbox is a cutting-edge web project starter template
            designed to provide a highly scalable architecture for launching
            your digital product. By adopting this template, you can kickstart
            your development process in a clean and efficient manner, enabling
            rapid product development. Experience the seamless developer journey
            and deliver exceptional user experiences with ease.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              variant="@primary"
              leftIcon={<FaGithub />}
              bg="#0582d2"
              rounded={'full'}
              px={6}
            >
              View on github
            </Button>
          </Stack>
        </Stack>
      </Container>
      <VStack spacing={4} align="start" mb={8}>
        <Stack direction="row" align="center" spacing={2}>
          <Heading as="h2" size="md">
            Main Features:
          </Heading>
        </Stack>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <Text>
            Parametrable design system code that follows rules regarding UX
          </Text>
        </Box>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <Text>Advanced reusable components to speed up development</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <Text>UI library that contains your front-end needs</Text>
        </Box>
      </VStack>
      <Box p={8}>
        {/* ... */}
        <VStack spacing={4} align="start" mb={8}>
          <Stack direction="row" align="center" spacing={2}>
            <Heading as="h2" size="md">
              Technologies:
            </Heading>
          </Stack>
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <Heading as="h3" size="sm" mb={2}>
              ReactJS
            </Heading>
            <Text>
              ReactJS is a popular JavaScript library for building user
              interfaces. It provides a component-based architecture and a
              virtual DOM, making it efficient and easy to develop interactive
              web applications.
            </Text>
          </Box>
          {/* Add descriptions for other technologies */}
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <Heading as="h3" size="sm" mb={2}>
              Nx
            </Heading>
            <Text>
              Nx is a powerful extensible dev toolset for monorepo development.
              It provides a set of CLI tools and plugins to enhance productivity
              and maintainability when working with large-scale projects.
            </Text>
          </Box>
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <Heading as="h3" size="sm" mb={2}>
              Storybook
            </Heading>
            <Text>
              Storybook is a development environment and UI component explorer
              for building and documenting UI components in isolation. It allows
              you to develop and test components independently, ensuring
              reusability and consistency across your application.
            </Text>
          </Box>
        </VStack>
      </Box>
      <Text fontSize="lg" mb={4}>
        Developed by Digital Squad
      </Text>
      <Stack direction="row" spacing={4}>
        <Link href="https://github.com/digitalsquad" isExternal>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            GitHub
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/company/digital-squad-ma"
          isExternal
        >
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://www.youtube.com/@SAYKOUKtv" isExternal>
          <Button leftIcon={<FaYoutube />} colorScheme="red" variant="solid">
            YouTube
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Main;
