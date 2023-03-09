// about.js
import { Box, Flex, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
    return (
        <Box as="about" pb={8}>
            <head>
                <meta name="viewpoint" content="width=device-width , initial-scale = 1" />
                <title> Indefinite Future - About me</title>
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
                    <div className="about">
                        <Box maxW="32rem">
                            <Heading mb={4}>
                                About me
                            </Heading>

                            <Text fontSIze='xl'>
                                I am curently a year 3 student at Hong Kong Baptist University studing computer science.
                            </Text>
                        </Box>
                    </div>
                </Flex>
            </Container>
        </Box>
    );
}

export default About;
