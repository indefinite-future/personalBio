// theme.js

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false
    },
    colors: {
        gray: {
          900: "#343a40", // Change this to your desired dark mode background color
          800: "#2d3748", // Change this to your desired dark mode text color
          100: "#f7fafc", // Change this to your desired light mode background color
        },
        white: "#ffffff" // Change this to your desired light mode text color
      },
})

export default theme;