// theme.js

import { DarkMode, LightMode, background, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    background: {
      LightMode: "#ffffff",
      DarkMode: "#343a40",
    },
    gray: {
      500: "#6c757d",
      100: "#f7fafc", // Change this to your desired light mode background color
    },
    white: "#ffffff" // Change this to your desired light mode text color
  },
})

export default theme;