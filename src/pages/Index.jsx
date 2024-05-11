import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const highlightColor = "blue.500";
  const hoverBgColor = "blue.600";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Navigation */}
        <Box as="nav" bg={bgColor} py={4} px={8}>
          <Flex justify="space-between" align="center">
            <Heading size="lg" color={highlightColor}>
              SaaSApp
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#" color={textColor}>
                Home
              </Link>
              <Link href="#" color={textColor}>
                Features
              </Link>
              <Link href="#" color={textColor}>
                Pricing
              </Link>
              <Link href="#" color={textColor}>
                About
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg={bgColor} py={20}>
          <VStack spacing={5}>
            <Heading size="2xl" color={textColor}>
              Welcome to SaaSApp
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Revolutionize your workflow with our tool.
            </Text>
            <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* Features Section */}
        <Box py={10} px={8} bg={bgColor}>
          <VStack spacing={8}>
            <Heading size="xl" color={textColor}>
              Features
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Feature One</Heading>
                <Text mt={4} color="gray.500">
                  Description of feature one.
                </Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Feature Two</Heading>
                <Text mt={4} color="gray.500">
                  Description of feature two.
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" bg={bgColor} color={textColor} py={5}>
          <Flex justify="space-between" px={8}>
            <Text>&copy; {new Date().getFullYear()} SaaSApp. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
