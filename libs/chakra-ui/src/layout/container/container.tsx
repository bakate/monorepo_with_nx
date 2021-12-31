import { Stack } from "@chakra-ui/react";
import {ReactElement} from 'react'

export interface ContainerProps {
  children?: ReactElement;
}

export function ChakraContainer({children}: ContainerProps) {
  return (
    <Stack  direction='column'  p={{base: '1rem', md: '1rem 5rem'}} mx={'auto'}
      // maxW={'8xl'}
            w={'full'} overflow={'hidden'}  spacing={1}  minH='100vh'>
      {children}
    </Stack>
  );
}


