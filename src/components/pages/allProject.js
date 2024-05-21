// Allproject.js
import { Box, Heading, Divider, Link as ChakraLink, Text } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";

const AllProject = () => {
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
            title: "Docker image for Alpine Linux with NoVnc",
            description: "Self-study project. A Docker image with KDE plasma, x11VNC based on Alpine Linux, deployed on Docker Hub.",
            url: "https://github.com/indefinite-future/Alpine-noVNC"
        },
        {
            title: "Inventory Management System (Kotlin)",
            description: "Project work for COMP4107. A android-based inventory management system using Kotlin, Jetpack Compose and Azure Cosmos DB",
            url: "https://github.com/indefinite-future/COMP4107-Inventory-App"
        },
        {
            title: "Personal Bio Website",
            description: "Self project. A personal bio website built with React.js and Chakra UI, deployed on Vercel. Just for fun.",
            url: "https://indefinite-future.vercel.app/"
        },
        {
            title: "Link in Bio",
            description: "Self project. A simple Link in bio that used as Linktree, deployed on Vercel. Just for fun.",
            url: "https://links.indefinite-future.vercel.app/"
        },
        {
            title: "Simplified League of Three Kingdoms",
            description: "Project work for COMP4107. A simplified League of Three Kingdoms game built with Kotlin to demonstrate the design pattern.",
            url: "https://github.com/UG-CS-HKBU/comp4107-spring2023-ltk-deadline-fighter"
        },
        {
            title: "Number to Chinese numerals function",
            description: "A javascript function to convert number to chinese numerals that used in bank system.",
            url: "https://gist.github.com/indefinite-future/851e110d68ecd690e228868e75d077dd"
        },
    ];

    return (
        <Box maxW='5xl' mx="auto" rounded='md'>
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom="2px" borderColor="gray.200" pt={14} pb={1}>
                <Heading>Projects</Heading>
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
export default AllProject;
