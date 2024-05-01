import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, useBreakpointValue, AspectRatio } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="teal.500" w="100%" p={4} color="white">
        <Text fontSize="xl" textAlign="center">
          Welcome to Nanopower!
        </Text>
      </Box>
      <Box w="100%" p={4}>
        <Image src="path/to/your/custom/photo.jpg" alt="Creative Workspace" objectFit="cover" />
      </Box>
      <Box bg="gray.800" color="white" py={10}>
        <VStack spacing={3}>
          <Heading as="h1" size="xl">
            Nanopower
          </Heading>
          <Text fontSize="lg">Empowering creativity across the globe</Text>
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} p={10}>
        <Flex direction="column" align="center" bg="gray.100" p={5} borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Creative Professional" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md">Graphic Designer</Text>
          <Flex mt={4}>
            <FaInstagram />
            <FaTwitter style={{ marginLeft: "10px" }} />
            <FaFacebookF style={{ marginLeft: "10px" }} />
          </Flex>
        </Flex>

        <Flex direction="column" align="center" bg="gray.100" p={5} borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Web Developer" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Jane Smith
          </Text>
          <Text fontSize="md">Web Developer</Text>
          <Flex mt={4}>
            <FaInstagram />
            <FaTwitter style={{ marginLeft: "10px" }} />
            <FaFacebookF style={{ marginLeft: "10px" }} />
          </Flex>
        </Flex>

        <Flex direction="column" align="center" bg="gray.100" p={5} borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Marketing Specialist" />
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Alice Johnson
          </Text>
          <Text fontSize="md">Marketing Specialist</Text>
          <Flex mt={4}>
            <FaInstagram />
            <FaTwitter style={{ marginLeft: "10px" }} />
            <FaFacebookF style={{ marginLeft: "10px" }} />
          </Flex>
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} p={10}>
        <Box bg="green.500" color="white" p={5} borderRadius="md">
          <Heading size="xl">150+</Heading>
          <Text mt={2}>Projects Completed</Text>
        </Box>
        <Box bg="blue.500" color="white" p={5} borderRadius="md">
          <Heading size="xl">300+</Heading>
          <Text mt={2}>Happy Clients</Text>
        </Box>
        <Box bg="purple.500" color="white" p={5} borderRadius="md">
          <Heading size="xl">20+</Heading>
          <Text mt={2}>Awards Won</Text>
        </Box>
      </SimpleGrid>
      <VideoSection />
      <Box bg="gray.800" color="white" py={10}>
        <VStack spacing={3}>
          <Heading as="h2" size="lg">
            Join Our Team
          </Heading>
          <Text fontSize="md" px={isMobile ? 4 : 0}>
            Are you a creative professional looking to make a big impact? Join us!
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

const VideoSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} p={10}>
      <AspectRatio ratio={16 / 9}>
        <iframe title="Creator Video 1" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <iframe title="Creator Video 2" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
      </AspectRatio>
    </SimpleGrid>
  );
};

export default Index;
