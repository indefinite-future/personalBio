import { Box, Flex, useColorModeValue, Image, Text, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";
import HomeButton from './icons/HomeIcon';
import AboutButton from './icons/AboutIcon';
import GitHubIcon from './icons/GitHubIcon';
import MyMenuIcon from './icons/MenuIcon';
import ThemeToggleButton from './toggleColorMode';

export default function Navbar() {
    const color = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <nav className='Nav'>
            <Box borderBottom="1px" borderColor={borderColor} bg={useColorModeValue('white', 'gray.800')}>
                <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="3xl"
                    mx="auto"
                    py={1}
                    px={1}
                    overflowX="auto"
                >
                    {isMobileView ? (
                        <ChakraLink as={ReactRouterLink} to="/">
                            <Image src='./icon.png' boxSize="32px" ml={5} mt="-2px" />
                        </ChakraLink>
                    ) : (
                        <Image src='./icon.png' boxSize="32px" mr={-60} mt="-2px" />
                    )}

                    {!isMobileView && (
                        <Text fontWeight="bold" fontSize="xl" color={color}>
                            Indefinite Future
                        </Text>
                    )}

                    <Flex alignItems="center" justifyContent="space-between" p={1}>
                        {!isMobileView && (
                            <ChakraLink as={ReactRouterLink} to="/">
                                <HomeButton />
                            </ChakraLink>
                        )}
                        <ChakraLink as={ReactRouterLink} to="/about">
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