import { Box, Heading, Button, Divider, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
export default function Projects() {
    const projectsitem = [
        {
            title: "QuoteLens",
            description: "Final year project. A cross-platform mobile application, under development.",
            url: "https://github.com/indefinite-future/QuoteLens"
        },
        {
            title: "B+ Tree Plementation in Java",
            description: "Group project for COMP4035. A B+ Tree implementation in Java with command line interface.",
            url: "https://github.com/indefinite-future/COMP4035"
        },
        {
            title: "Moist detector with M5StickC plus and Earth sensor and visualized with swiftUI apps",
            description: "Project for COMP4097. A moisture detector with M5StickC plus and Earth sensor built on UIflow and visualized with swiftUI apps.",
            url: "https://github.com/indefinite-future/COMP4097-ASM2"
        },
        {
            title: "Inventory Management System (Web)",
            description: "Project work for COMP3047. A web-based inventory management system using Vuejs, Express.js and Azure Cosmos DB",
            url: "https://placehold.co/40x40"
        },
        {
            title: "Inventory Management System (Kotlin)",
            description: "Project work for COMP4107. A android-based inventory management system using Kotlin, Jetpack Compose and Azure Cosmos DB",
            url: "https://placehold.co/40x40"
        },
        {
            title: "Personal Bio Website",
            description: "Self project. A personal bio website built with React.js and Chakra UI, deployed on Vercel. Just for fun.",
            url: "https://placehold.co/40x40"
        },
        {
            title: "Personal Bio Website",
            description: "Self project. A personal bio website built with React.js and Chakra UI, deployed on Vercel. Just for fun.",
            url: "https://placehold.co/40x40"
        }
    ];

    return (
        <Box maxW="container.md" mx="auto" rounded='md'>
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom="2px" borderColor="gray.200" py={4}>
                <Heading>Projects</Heading>
                <ChakraLink as={ReactRouterLink} to="/about">
                    <Button colorScheme="blue" variant="link" style={{ textDecoration: 'none' }}>View all</Button>
                </ChakraLink>
            </Box>
            <Box >
                {projectsitem.map((project, index) => (
                    <Box key={index} rounded="md" _hover={{ boxShadow: "2xl" }}>
                        <Project {...project} index={index} />
                        <Divider borderColor="gray.200" />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

function Project({ title, description, url, index }) {
    return (
        <ChakraLink href={url} style={{ textDecoration: 'none' }} isExternal key={index}>
            <Box display="flex" alignItems="center" spaceX={4} p={4} py={2}>
                <Box>
                    <Text fontSize="lg" fontWeight="semibold">{title}</Text>
                    <Text color="gray.600">{description}</Text>
                </Box>
            </Box>
        </ChakraLink>
    );
}