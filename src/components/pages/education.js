import { Stack, Image, Box, Heading, Text } from '@chakra-ui/react'

export default function Education() {
    return (
        <Box mx="auto" rounded='md'>
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom="2px" borderColor="gray.200" py={4}>
                <Heading>Education</Heading>
            </Box>
            <Stack rounded='md' direction="row" spacing={2} _hover={{ boxShadow: '2xl' }}>
                <Box boxSize="125px">
                    <Image
                        src='hkbu.png'
                        alt='hkbu icon'
                        boxSize='100%'
                        objectFit='cover'
                        fallbackSrc='https://via.placeholder.com/125'
                    />
                </Box>
                <Stack direction="column" spaceX={4} py={2} spacing={0}>
                    <Text fontSize="lg" fontWeight="semibold">BSc (Hons.) in Computer Science</Text>
                    <Text fontSize="md" fontWeight="semibold"> - Computing and Software Technologies Concentration</Text>
                    <Text fontSize="lg" fontWeight="semibold">Hong Kong Baptist University</Text>
                    <Text fontSize='sm' >September 2020 - Present</Text>
                </Stack>
            </Stack>
        </Box >
    )
}