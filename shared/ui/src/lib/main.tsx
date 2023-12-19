import {
  Box,
  Container,
  Text,
  Stack,
  Button,
  Link,
  VStack,
  Image,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import { SiReact, SiVite, SiStorybook } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Card from '@/lib/Card';
import SectionHeading from '@lib/SectionHeading/SectionHeading';
import Paragraph from '@/lib/Paragraph/Paragraph';
import ResponsiveButton from '@/lib/ResponsiveButton';

const Main = () => {
  return (
    <Box
      backgroundColor="#f7fafc"
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
          <SectionHeading htmlComponent="h1" color="#0582d2">
            <Image src="/react-toolbox.png" margin="0 auto" />
            cutting-edge web template
          </SectionHeading>
          <Text>
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
        <Stack direction="row" align="center" spacing={2} pb={16}>
          <SectionHeading htmlComponent="h2" color="#0582d2">Main Features</SectionHeading>
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
              buttonText="Learn More"
            />
          </GridItem>
          <GridItem>
            <Card
              image="illustrations/flexible.svg"
              title="Flexibility"
              content="Advanced reusable components to speed up development"
              buttonText="Learn More"
            />
          </GridItem>
          <GridItem>
            <Card
              image="illustrations/fast.svg"
              title="Efficient"
              content="UI library that contains your front-end needs"
              buttonText="Learn More"
            />
          </GridItem>
        </Grid>
      </VStack>
      <Box p={8}>
        {/* ... */}
        <VStack spacing={4} mb={8}>
          <Stack direction="row" align="center" spacing={2} pb={16}>
            <SectionHeading htmlComponent="h2" color="#0582d2">Technology choices</SectionHeading>
          </Stack>
          <Flex flexWrap="wrap">
            <Paragraph
              icon={SiReact}
              title="ReactJS"
              description="ReactJS is a JavaScript library for building user interfaces, focusing on a declarative and component-based approach. It allows developers to efficiently create interactive and dynamic web applications by breaking the UI into reusable components. React's virtual DOM efficiently updates the actual DOM, making UI updates faster and more efficient. Its popularity and vast ecosystem make it the go-to choice for front-end development."
            />
            <Paragraph
              icon={SiVite}
              title="Vite"
              description="Vite is a build tool and development server designed for modern JavaScript applications. It offers blazing fast development and build times by utilizing native ES modules and leveraging the browser's native import capabilities. Vite's development server uses native ES modules to serve JavaScript, which accelerates hot module replacement and refreshes. It's a great choice for building performant and modern web applications."
            />
            <Paragraph
              icon={SiStorybook}
              title="Storybook"
              description="Storybook is a development environment for UI components. It allows you to isolate, develop, and test individual components in isolation, providing a visual testing and documentation platform. Storybook helps teams collaborate better and maintain a library of reusable components across projects. It's widely used in component-driven development to streamline the UI development process."
            />
          </Flex>
        </VStack>
      </Box>
      <Box textAlign="center" bgColor="gray.800" padding={8}>
        <Text fontSize="md" mb={4} color="white">
          Made with love by Digital squad
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://github.com/digisquad" isExternal>
            <ResponsiveButton
              icon={<FaGithub />}
              iconPosition="left"
              colorScheme="gray"
              variant="solid"
            >
              GitHub
            </ResponsiveButton>
          </Link>
          <Link
            href="https://www.linkedin.com/company/digital-squad-ma"
            isExternal
          >
            <ResponsiveButton
              icon={<FaLinkedin />}
              iconPosition="left"
              colorScheme="blue"
              variant="solid"
            >
              LinkedIn
            </ResponsiveButton>
          </Link>
          <Link href="https://www.youtube.com/@SAYKOUKtv" isExternal>
            <ResponsiveButton
              icon={<FaYoutube />}
              iconPosition="left"
              colorScheme="red"
              variant="solid"
            >
              YouTube
            </ResponsiveButton>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Main
