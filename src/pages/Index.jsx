import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, useBreakpointValue, AspectRatio } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="teal.500" w="100%" p={4} color="white">
        <Text fontSize="xl" textAlign="center">
          Welcome to Cool Creator Agency!
        </Text>
      </Box>
      <Box bg="gray.800" color="white" py={10}>
        <VStack spacing={3}>
          <Heading as="h1" size="xl">
            Cool Creator Agency
          </Heading>
          <Text fontSize="lg">Empowering creativity across the globe</Text>
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} p={10}>
        <Flex direction="column" align="center" bg="gray.100" p={5} borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1687575635557-a3f3ed535b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3MTQ1MjE2NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Creative Professional" />
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
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzE0NTIxNjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Developer" />
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
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzcGVjaWFsaXN0fGVufDB8fHx8MTcxNDUyMTY0NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Marketing Specialist" />
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
