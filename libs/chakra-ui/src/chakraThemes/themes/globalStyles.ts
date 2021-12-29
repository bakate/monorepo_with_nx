import { mode, Styles } from "@chakra-ui/theme-tools";

export const ethicalClothesGlobalStyles:Styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.800")(props),
      color: mode("gray.800",  "whiteAlpha.900")(props),
    },
    // styles for the `a`
    a: {
      _hover: {
        // color: mode("gray.200", "teal.500")(props),
        borderBottom: '2px solid',
        borderBottomColor:mode(  "whiteAlpha.900", "gray.800")(props),
        transition: "all 0.4s ease-in-out"
      },
    },
  })
}
