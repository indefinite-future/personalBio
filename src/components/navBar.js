import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
//import Favicon from './icon.png';
import HomeButton from './HomeIcon';
import ThemeToggleButton from './toggleColorMode';
import AboutButton from './AboutIcon';
import GitHubIcon from './GitHubIcon';
import MyMenuIcon from './MenuIcon';

export default function Navbar() {
    // const bg = { light: "gray.100", dark: "gray.900" };
    // const { colorMode } = useColorMode();
    const color = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <nav className='Nav'>
            <Box borderBottom="1px" borderColor={borderColor}>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="3xl"
                    mx="auto"
                    py={1}
                    px={1}
                >
                    {/* <img src='./icon.png' /> */}
                    <Text fontWeight="bold" fontSize="xl" color={color}>
                        Indefinite Future
                    </Text>

                    <Flex alignItems="center" justifyContent="space-between" p={1}>
                        <Link to="/">
                            <HomeButton />
                        </Link>
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
            </Box >
        </nav>
    );
}