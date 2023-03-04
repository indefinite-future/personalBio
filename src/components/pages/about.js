// About.jsx
import { Box, Flex, Container } from "@chakra-ui/react";
import React from "react";

const About = () => {
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
                    <div className="about">
                        <h1>About Page</h1>
                        <p>This is the about page of my app.</p>
                    </div>
                </Flex>
            </Container>
        </Box>
    );
}

export default About;
