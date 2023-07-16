import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Link,
  VStack,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Card from '@/lib/card';
const Main = () => {
  return (
    <Box
      backgroundColor="#F9F9F9"
      backgroundImage="/background.jpg"
      backgroundRepeat="no-repeat"
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 12 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            <Image src="/react-toolbox.png" margin="0 auto" />
            <Text as={'span'} color="#0582d2">
              cutting-edge web template
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            React toolbox is a cutting-edge web project starter template
            designed to provide a highly scalable architecture for launching
            your digital product. Experience the seamless developer journey and
            deliver exceptional user experiences with ease.
          </Text>
          <Stack
            direction={'column'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link href="https://github.com/digisquad/react-toolbox">
              <Button
                leftIcon={<FaGithub />}
                _hover={{ bg: '#010409', color: '#dee5ed' }}
                rounded="full"
                px={6}
              >
                View on github
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
      <VStack spacing={4} align="center" mb={8}>
        <Stack direction="row" align="center" spacing={2}>
          <Heading as="h1">
            <Text as={'span'} color="#0582d2">
              Main Features
            </Text>
          </Heading>
        </Stack>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          <GridItem>
            <Card
              image="illustrations/parametrable.svg"
              title="Parametrable"
              content="Parametrable design system code that follows rules regarding UX"
            />
          </GridItem>
          <GridItem>
            <Card
              image="illustrations/flexible.svg"
              title="Flexibility"
              content="Advanced reusable components to speed up development"
            />
          </GridItem>
          <GridItem>
            <Card
              image="illustrations/fast.svg"
              title="Efficient"
              content="UI library that contains your front-end needs"
            />
          </GridItem>
        </Grid>
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
        <Link href="https://github.com/digisquad" isExternal>
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
