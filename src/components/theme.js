// theme.js

import { extendTheme } from '@chakra-ui/react'
//import { menuTheme } from './menuTheme'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.background' : 'light.background',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    light: {
      background: "#ffffff",
      text: "#111111",
      // Define other colors for light mode here
    },
    dark: {
      background: "#202020",
      text: "#eeeeee",
      // Define other colors for dark mode here
    },
  },
  // components: {
  //   Menu: menuTheme,
  // },
})

export default theme;