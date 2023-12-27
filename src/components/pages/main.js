// main.js
import { Box, Container, Flex, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import Education from './education'
import Project from './project'
import '../../index.css'


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
                                I'm a senior student studying computer science in
                                <Link href="https://www.comp.hkbu.edu.hk/v1/" color="blue" isExternal> HKBU</Link>.
                                This website hosts some information about me and some of the projects worked on while studying in university.
                            </Text>

                            <br></br>

                            {/* Education */}
                            <Education />

                            {/* Experience */}

                            {/* Projects */}
                            <Project />

                            {/* Footing */}


                        </Box>
                    </div>
                </Flex>
            </Container>
        </Box>
    )
}

export default Main;