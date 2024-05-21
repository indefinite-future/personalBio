import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

function AboutButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "--dark" };
    const color = useColorModeValue('gray.800', 'white');

    return (
        <IconButton
            aria-label="route to about"
            icon={<InfoIcon />}
            variant="ghost"
            color={color[colorMode]}
            _hover={{ bg: bg[colorMode] }}
            ml={4}
            mr={4}
            m={2}
            fontSize="24" // This is the size of the icon
        ></IconButton>
    )
}

export default AboutButton;