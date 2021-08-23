import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  //initialColorMode={theme.config.initialColorMode}
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
