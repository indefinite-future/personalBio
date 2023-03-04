import { Box, Flex, Text, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Main from "./pages/main";
import About from "./pages/about";
import NotFound from "./pages/404NotFound";
import HomeButton from './HomeIcon';
import ThemeToggleButton from './toggleColorMode';
import AboutButton from './AboutIcon';

export default function Navbar() {
    const bg = { light: "gray.100", dark: "gray.900" };
    const { colorMode } = useColorMode();
    const color = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box borderBottom="1px" borderColor={borderColor}>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                maxW="3xl"
                mx="auto"
                py={1}
                px={1}
            >
                <Text fontWeight="bold" fontSize="xl" color={color}>
                    Indefinite Future
                </Text>

                <Router>
                    <Flex alignItems="center" justifyContent="space-between" p={1}>
                        <Link to="/">
                            <HomeButton />
                        </Link>
                        <Link to="/about">
                            <AboutButton />
                        </Link>
                        <a href="https://github.com/indefinite-future">
                            <IconButton
                                icon={<FaGithub />}
                                variant="ghost"
                                color={color[colorMode]}
                                _hover={{ bg: bg[colorMode] }}
                                ml={4}
                                mr={4}
                                m={2}
                            ></IconButton>
                        </a>

                        <IconButton
                            aria-label="Toggle menu"
                            icon={<HamburgerIcon />}
                            variant="ghost"
                            color={color[colorMode]}
                            _hover={{ bg: bg[colorMode] }}
                            ml={4}
                            mr={4}
                            m={2}
                        ></IconButton>
                        <ThemeToggleButton />
                    </Flex>
                    <Routes>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route component={NotFound} />
                    </Routes>
                </Router>
            </Flex>
        </Box>
    );
}
