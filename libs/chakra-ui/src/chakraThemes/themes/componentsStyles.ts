const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'teal.500',
        },
      },
    },
  },
  // sizes: {
  //   md: {
  //     field: {
  //       borderRadius: 'none'
  //     }
  //   }
  // }
};

const brandRing = {
  '& _focus': 'teal.500',
  ring: 2,
  ringColor: 'teal.500',
};

export const ethicalClothesComponentsStyles = {
  Button: {
    baseStyle: {
      textTransform: 'capitalize',
    },
    // variants: {
    //   primary: (props: Dict<any> | StyleFunctionProps)=> ({
    //     ...brandRing,
    //     color: mode('white', 'gray.800')(props),
    //     backgroundColor: mode('teal.500', 'teal.700')(props),
    //     _hover: {
    //       // +100
    //       backgroundColor: mode('teal.400', 'teal.800')(props),
    //     },
    //     _active: {
    //       // +200
    //       backgroundColor: mode('teal.500', 'teal.900')(props),
    //     }
    //   })
    // }
  },
  Input: { ...inputSelectStyles },
  Select: { ...inputSelectStyles },
  Checkbox: {
    baseStyle: {
      control: {
        // borderRadius: 'none',
        ...brandRing,
      },
    },
  },
  Text: {
    baseStyle: {
      textAlign: 'center',
    },
  },
};
