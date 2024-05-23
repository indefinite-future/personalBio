// navBar.js

import { Box, Flex, useColorModeValue, Image, Text, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";
import HomeButton from './icons/HomeIcon';
import AboutButton from './icons/AboutIcon';
import GitHubIcon from './icons/GitHubIcon';
import MyMenuIcon from './icons/MenuIcon';
import ThemeToggleButton from './toggleColorMode';
//import theme from './theme';

export default function Navbar() {
    const bgColor = useColorModeValue('light.background', 'dark.background');
    const textColor = useColorModeValue('light.text', 'dark.text');
    const borderColor = useColorModeValue('gray.200', 'gray.200');
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <nav className='Nav'>
            <Box pos='sticky' top={0} zIndex={10} borderBottom="1px" borderColor={borderColor} bg={bgColor}>
                <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="5xl"
                    mx="auto"
                    py={1}
                    px={1}
                    overflowX="auto"
                >
                    <Flex alignItems="center">
                        {isMobileView ? (
                            <ChakraLink as={ReactRouterLink} to="/">
                                <Image src='./icon.png' boxSize="36px" ml={5} mt="-2px" />
                            </ChakraLink>
                        ) : (
                            < Image src='./icon.png' boxSize="36px" mt="-2px" />
                        )}

                        {!isMobileView && (
                            <Text fontWeight="bold" fontSize='larger' ml={5} color={textColor}>
                                Alan Ho
                            </Text>
                        )}
                    </Flex>

                    <Flex alignItems="center" justifyContent="space-between" p={1}>
                        {!isMobileView && (
                            <ChakraLink as={ReactRouterLink} to="/">
                                <HomeButton />
                            </ChakraLink>
                        )}
                        <ChakraLink as={ReactRouterLink} to="/projects">
                            <AboutButton />
                        </ChakraLink>
                        <ChakraLink href="https://github.com/indefinite-future" style={{ textDecoration: 'none' }} isExternal>
                            <GitHubIcon />
                        </ChakraLink>

                        <MyMenuIcon />
                        <ThemeToggleButton />
                    </Flex>
                </Flex>
            </Box>
        </nav>
    );
}