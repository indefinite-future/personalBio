import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import "../index.css"

function ThemeToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("gray.100", "gray.900");
    const color = useColorModeValue('gray.800', 'white');

    return (
        <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            onClick={toggleColorMode}
            color={color}
            _hover={{ bg: bg }}
            ml={4}
            mr={4}
            m={2}
            fontSize="24" // This is the size of the icon
        > </IconButton>
    )
}

export default ThemeToggleButton;