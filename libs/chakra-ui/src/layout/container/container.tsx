import { VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface ContainerProps {
  children?: ReactElement;
  isCentered?: boolean;
}

export function ChakraContainer({children, isCentered}: ContainerProps) {
  return (
    <VStack align={isCentered ? 'center': 'stretch'}  p={{base: '1rem', md: '1rem 5rem'}} mx={'auto'} w={'full'} overflow={'hidden'}  spacing={1}  minH='100vh'>
     {children}
    </VStack>
  );
}


