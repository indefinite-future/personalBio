import { Button, Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

const Main = () => {
    return (
        <Box as="main" pb={8}>
            <head>
                <meta name="viewpoint" content="width=device-width , initial-scale = 1" />
                <title> Indefinite Future - Homepage</title>
            </head>

            <Container maxW="Container.md" pt={14}>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="3xl"
                    mx="auto"
                    py={1}
                    px={1}
                >
                    <Box maxW="32rem">
                        <Heading mb={4}>
                            A computer science student
                        </Heading>
                        <Text fontSize="xl">
                            who look for jobs and friends.
                        </Text>
                        <Button size="lg" colorScheme="green" mt="24px">
                            Contact me
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Main;