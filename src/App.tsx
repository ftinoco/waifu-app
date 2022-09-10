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
import PageSelector from "./components/PageSelector"
import { DataContext } from "./context"

export const App = () => {

  const [test, setTest] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const {
    orientation,
    isNSFW,
    isGIF,
    many,
    selectedTags
  } = React.useContext(DataContext);

  React.useEffect(() => {
    if (orientation === 'LANDSCAPE'){
      setTest('pagos');
      setAmount(2022);
    }
    else
      setTest('catalogos');
  }, [
    orientation,
    isNSFW,
    isGIF,
    many,
    selectedTags
  ]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Filter />
          {test !== '' &&
          <PageSelector.RenderComponentByName name={test}
          props={amount > 0  ? {amount: amount} : null}
          />
        }
          {/* <Random /> */}
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
