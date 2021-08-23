import { extendTheme } from '@chakra-ui/react'
import { breakpoints } from './design/breakpoints'
import { fonts } from './design/fonts'
import { config } from './design/config'

export const theme = extendTheme({
  config,
  fonts,
  breakpoints,
})
