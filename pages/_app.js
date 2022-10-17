import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "../src/utils/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}