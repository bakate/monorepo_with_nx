import { Box, Button, Center, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { ChakraNav } from "../nav/nav";

export interface HeaderProps {
  linksProp: {
    href: string;
    label: string;
  }[];
  bgColorProp?: string[];
  colorProp?: string[];
  title?: string;
}

export function ChakraHeader(props: HeaderProps) {
  const { linksProp, bgColorProp = ['teal.500', "teal.200"], colorProp = ['white','grey.800' ], title } = props;

  const bgColor = useColorModeValue(bgColorProp?.[0], bgColorProp?.[1]);
  const color = useColorModeValue(colorProp?.[0], colorProp?.[1]);
  return (
    <Flex
      color={color}
      bg={bgColor}
      p={'4'}
      w={'full'}
      as='nav' align='center' justify='space-between'
    >
      <Center>
        <Heading as={'h3'}>{title}</Heading>
      </Center>
      <Box d={{ base: 'none', md: 'flex' }} align='center' justify='center'>
        <ChakraNav navLinks={linksProp} />
      </Box>
      <Button>Hello</Button>

    </Flex>
  );
}


