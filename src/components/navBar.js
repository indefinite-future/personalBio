import { Box, Flex, useColorModeValue, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import HomeButton from './icons/HomeIcon';
import AboutButton from './icons/AboutIcon';
import GitHubIcon from './icons/GitHubIcon';
import MyMenuIcon from './icons/MenuIcon';
import ThemeToggleButton from './toggleColorMode';

export default function Navbar() {
    const color = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <nav className='Nav'>
            <Box borderBottom="1px" borderColor={borderColor}>
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
                        <Link to="/">
                            <Image src='./icon.png' boxSize="32px" ml={5} mt="-2px" />
                        </Link>
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
                            <Link to="/">
                                <HomeButton />
                            </Link>
                        )}
                        <Link to="/about">
                            <AboutButton />
                        </Link>
                        <a href="https://github.com/indefinite-future">
                            <GitHubIcon />
                        </a>

                        <MyMenuIcon />
                        <ThemeToggleButton />
                    </Flex>
                </Flex>
            </Box>
        </nav>
    );
}