// main.js

import { Box, Container, Flex, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Education from './education'
import ProjectHighlight from './projectHighlight'
import '../../index.css'


const Main = () => {
    const linkColor = useColorModeValue('blue', 'cyan');
    const bgColor = useColorModeValue('light.background', 'dark.background');
    //const textColor = useColorModeValue('light.text', 'dark.text');

    return (
        <Box as="main" pb={'14'} bg={bgColor}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Alan Ho</title>
            </head>

            <Container maxW="Container.md" >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="5xl"
                    mx="auto"
                    py={1}
                >
                    <Box maxW="5xl" pt={14} >
                        <Heading mb={4}>
                            Hello, I'm Alan 👋🏻
                        </Heading>

                        <Text fontSize="xl">
                            I'm a senior student studying computer science in <Link href="https://www.comp.hkbu.edu.hk/v1/" color={linkColor} isExternal>HKBU</Link>.
                            This website hosts some information about me and some of the projects worked on while studying in university.
                        </Text>

                        <br></br>

                        {/* Education */}
                        <Education />

                        {/* Experience */}

                        {/* Projects */}
                        <ProjectHighlight />

                        {/* Footing */}


                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Main;