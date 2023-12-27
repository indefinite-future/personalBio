// main.js
import { Button, Stack, Image, Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Project from './project'


const Main = () => {
    return (
        <Box as="main" pb={8}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Indefinite Future</title>
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
                    <div className='main'>
                        <Box maxW="3xl">
                            <Heading mb={4}>
                                Hello, I'm Alan 👋🏻
                            </Heading>

                            <Text fontSize="xl">
                                I'm a senior student studying computer science in <a href="https://www.comp.hkbu.edu.hk/v1/" target="_blank" rel="noopener noreferrer">HKBU</a>. This website hosts some of the projects worked on while studying in university.
                            </Text>

                            <br></br>

                            {/* Education */}
                            <Heading>
                                Education
                            </Heading>

                            <Stack direction="row" spacing={2}>
                                <Box>
                                    <Image
                                        src='hkbu.png'
                                        alt='hkbu icon'
                                        fallbackSrc='https://via.placeholder.com/170' />
                                </Box>
                                <Stack direction="column" spacing={0}>
                                    <h2>BSc in Computer Science</h2>
                                    <h3>Hong Kong Baptist University</h3>
                                    <h3>September 2020 - Present</h3>
                                </Stack>
                            </Stack>

                            {/* Experience */}

                            {/* Projects */}
                            <Project />



                            <Button size="lg" colorScheme="green" mt="24px">
                                Contact me
                            </Button>
                        </Box>
                    </div>
                </Flex>
            </Container>
        </Box>
    )
}

export default Main;