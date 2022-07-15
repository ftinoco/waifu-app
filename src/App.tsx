import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Random } from "./components/random.component"
import { Filter } from "./components/filter.component"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Filter />
        <Random />
      </Grid>
    </Box>
  </ChakraProvider>
)
