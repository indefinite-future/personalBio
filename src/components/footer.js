// footer.js

import { Box, Text } from '@chakra-ui/react'
const year = new Date().getFullYear();
const name = "";

function footer() {
    return (
        <Box alignItems={'center'} opacity={0.4} fontSize={'sm'}>
            <footer>
                <Text pb={4}>© {year} {name}. All rights reserved.</Text>
            </footer>
        </Box>
    );
}

export default footer;