// about.js
import { Box, Heading, Button, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";

const AllProject = () => {
    const projectsitem = [
        {
            title: 'QuoteLens',
            description: 'Final year project. A cross-platform mobile application, under development.',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'B+ Tree Plementation in Java',
            description: 'Group project for COMP4035. A B+ Tree implementation in Java with command line interface.',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Moist detector with M5StickC plus and Earth sensor and visualized with swiftUI apps',
            description: 'Project for COMP4097. A moisture detector with M5StickC plus and Earth sensor built on UIflow and visualized with swiftUI apps.',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Inventory Management System (Web)',
            description: 'Project work for COMP3047. A web-based inventory management system using Vuejs, Express.js and Azure Cosmos DB',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Inventory Management System (Kotlin)',
            description: 'Project work for COMP4107. A android-based inventory management system using Kotlin, Jetpack Compose and Azure Cosmos DB',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Personal Bio Website',
            description: 'Self project. A personal bio website built with React.js and Chakra UI, deployed on Vercel. Just for fun.',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Personal Bio Website',
            description: 'Self project. A personal bio website built with React.js and Chakra UI, deployed on Vercel. Just for fun.',
            icon: 'https://placehold.co/40x40'
        }
    ];

    return (
        <Box maxW="container.md" mx="auto" px={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom="2px" borderColor="gray.200" py={4}>
                <Heading>Projects</Heading>
                <Button colorScheme="blue" variant="link">View all</Button>
            </Box>
            <Box >
                {projectsitem.map((project, index) => (
                    <Box key={index} rounded=' md' _hover={{ boxShadow: 'xl' }}>
                        <Project {...project} />
                        <Divider borderColor="gray.200" />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

function Project({ title, description, icon }) {
    return (
        <Box display="flex" alignItems="center" spaceX={4} py={2}>
            <Image src={icon} alt={`Icon representing the project ${title}`} boxSize="40px" />
            <Box>
                <Text fontSize="lg" fontWeight="semibold">{title}</Text>
                <Text color="gray.600">{description}</Text>
            </Box>
        </Box>
    );
}
export default AllProject;
