import { useState } from "react";
import { useColorMode, IconButton, useColorModeValue, MenuButton, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin, BsEnvelope, BsLink45Deg, BsGithub } from "react-icons/bs";


export default function MyMenuButton() {
    const { colorMode } = useColorMode();
    const bg = { light: "gray.100", dark: "gray.900" };
    const color = useColorModeValue('gray.800', 'white');
    const [isOpen, setIsOpen] = useState(false);

    return (
        isOpen,
        setIsOpen,
        useState,
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Toggle menu"
                    icon={<BsLink45Deg size="30" />}
                    variant="ghost"
                    color={color[colorMode]}
                    _hover={{ bg: bg[colorMode] }}
                    ml={4}
                    mr={4}
                    m={2}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <MenuList>
                    <MenuOptionGroup title="Contact" >
                        <MenuItem as='a' href='mailto:alanhtt0414@gmail.com' icon={<BsEnvelope />}>Email</MenuItem>
                        <MenuItem as='a' href='https://www.instagram.com/indefinitefuture/' icon={<BsInstagram />}>Instagram</MenuItem>
                        <MenuItem as='a' href='https://www.linkedin.com/in/taktingho414' icon={<BsLinkedin />}>LinkedIn</MenuItem>
                        <MenuDivider />
                        <MenuItem as='a' href='https://github.com/indefinite-future/personalBio' icon={<BsGithub />}>Github source code</MenuItem>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </>

    )
}