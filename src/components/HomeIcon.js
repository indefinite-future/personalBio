import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

function HomeButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');

    return (
        <IconButton
            aria-label="route to main"
            icon={<FaHome />}
            color={color[colorMode]}
            _hover={{ bg: bg[colorMode] }}
            boxsize={10}
            mr={4}
            ml={4}
            m={2}
            variant="ghost"
        />
    )
}

export default HomeButton;