import {
  Center,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface FooterProps {
  children?: ReactNode;
  content?: string;
  bgColorProp?: string[];
  colorProp?: string[];
}

export function ChakraFooter(props: FooterProps) {
  const {
    children,
    content,
    bgColorProp = ['teal.500', 'teal.200'],
    colorProp = ['white', 'gray.800'],
  } = props;

  const bgColor = useColorModeValue(bgColorProp?.[0], bgColorProp?.[1]);
  const color = useColorModeValue(colorProp?.[0], colorProp?.[1]);
  return (
    <Center color={color} bg={bgColor} py={6}>
      <VStack>
        <Text>{content ?? 'Made with ❤ in Paris'} </Text>
        {children && <HStack>{children}</HStack>}
      </VStack>
    </Center>
  );
}

export default ChakraFooter;
