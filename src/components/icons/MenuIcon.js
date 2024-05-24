import { useState } from "react";
import { useColorMode, IconButton, useColorModeValue, MenuButton, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin, BsEnvelope, BsLink45Deg, BsGithub } from "react-icons/bs";


export default function MyMenuButton() {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue('light.background', 'dark.background');
    const color = useColorModeValue('gray.800', 'white');
    const [isOpen, setIsOpen] = useState(false);

    return (
        isOpen,
        setIsOpen,
        useState,
        <Menu position="absolute" zIndex="2">
            <MenuButton
                as={IconButton}
                aria-label="Toggle menu"
                icon={<BsLink45Deg />}
                variant="ghost"
                color={color[colorMode]}
                _hover={{ bg: bgColor[colorMode] }}
                ml={4}
                mr={4}
                m={2}
                fontSize="24"
                onClick={() => setIsOpen(!isOpen)}
            />
            <MenuList bg={bgColor}>
                <MenuOptionGroup title="Contact" >
                    <MenuItem as='a' href='mailto:alanhtt0414@gmail.com' bg={bgColor} icon={<BsEnvelope />}>Email</MenuItem>
                    <MenuItem as='a' href='https://www.instagram.com/indefinitefuture/' bg={bgColor} icon={<BsInstagram />}>Instagram</MenuItem>
                    <MenuItem as='a' href='https://www.linkedin.com/in/taktingho414' bg={bgColor} icon={<BsLinkedin />}>LinkedIn</MenuItem>
                    <MenuDivider />
                    <MenuItem as='a' href='https://github.com/indefinite-future/personalBio' bg={bgColor} icon={<BsGithub />}>Github source code</MenuItem>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}