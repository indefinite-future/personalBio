import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function ThemeToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');


    return (
        <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon size="30" /> : <SunIcon size="30" />}
            variant="ghost"
            onClick={toggleColorMode}
            color={color[colorMode]}
            _hover={{ bg: bg[colorMode] }}
            ml={4}
            mr={4}
            m={2}
        />
    )
}

export default ThemeToggleButton;