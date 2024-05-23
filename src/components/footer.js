// footer.js

import { Center, Text } from '@chakra-ui/react'
const year = new Date().getFullYear();
const name = "";

function footer() {
    return (
        <Center>
            <footer>
                <Text pb={4}>© {year} {name}. All rights reserved.</Text>
            </footer>
        </Center>
    );
}

export default footer;