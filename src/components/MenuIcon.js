import { useState } from "react";
import { useColorMode, IconButton, useColorModeValue, MenuButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuList, MenuItem, MenuDivider, } from '@chakra-ui/react'

function MyMenuButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Toggle menu"
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    color={color[colorMode]}
                    _hover={{ bg: bg[colorMode] }}
                    ml={4}
                    mr={4}
                    m={2}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <MenuList>
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Item 3</MenuItem>
                </MenuList>
            </Menu>
        </>

    )
}

export default MyMenuButton;