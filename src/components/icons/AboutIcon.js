import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

function AboutButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');

    return (
        <IconButton
            icon={<InfoIcon />}
            aria-label="route to about"
            variant="ghost"
            color={color[colorMode]}
            _hover={{ bg: bg[colorMode] }}
            ml={4}
            mr={4}
            m={2}
        ></IconButton>
    )
}

export default AboutButton;