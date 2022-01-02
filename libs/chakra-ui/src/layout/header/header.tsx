import { Box, Center, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import DarkModeSwitch from "../../lib/dark-mode-switch/dark-mode-switch";
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
  const {
    linksProp,
    bgColorProp = ['teal.500', 'teal.200'],
    colorProp = ['white', 'gray.800'],
    title,
  } = props;

  const bgColor = useColorModeValue(bgColorProp?.[0], bgColorProp?.[1]);
  const color = useColorModeValue(colorProp?.[0], colorProp?.[1]);

  return (
    <Flex
      color={color}
      bg={bgColor}
      p={{base: '1rem', md: '1rem 5rem' }}
      w={'full'}
      as="nav"
      align="center"
      justify="space-between"
    >
      {title ? <Center d={{ base: 'none', md:'flex' }}>
        <Heading as={"h3"}>{title}</Heading>
      </Center>: <Box />}
      <Box d={{ base: 'flex' }} align="center" justify="center">
        <ChakraNav navLinks={linksProp} />
      </Box>
      <DarkModeSwitch />
    </Flex>
  );
}
