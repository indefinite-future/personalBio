import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function GitHubButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');

    return (
        <IconButton
            aria-label="route to GitHub"
            icon={<FaGithub size={"30"} />}
            variant="ghost"
            color={color[colorMode]}
            _hover={{ bg: bg[colorMode] }}
            ml={4}
            mr={4}
            m={2}
        ></IconButton >
    )
}

export default GitHubButton;