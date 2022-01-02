import {
  Alert,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Code,
  CodeProps,
  Divider,
  Heading,
  HeadingProps,
  Link as ChakraLink,
  LinkProps,
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  Stack,
  Text,
  TextProps,
  UnorderedList,
  useColorModeValue
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { CustomLink } from "./custom-link/custom-link";

// you can also re-map the components, like

const p = ({ children, ...delegated }: TextProps) => {
  return (
    <Text as="p" mt={4} lineHeight="tall" {...delegated}>
      {children}
    </Text>
  );
};

const ul = ({ children, ...delegated }: ListProps) => {
  return (
    <UnorderedList {...delegated}>
        {children}
    </UnorderedList>
  );
};

const ol = ({ children, ...delegated }: ListProps) => {
  return (
    <OrderedList {...delegated}>
        {children}
    </OrderedList>
  );
};

const li = ({ children, ...delegated }: ListItemProps) => {
  return (
    <ListItem pb={1} {...delegated}>
      {children}
    </ListItem>
  );
};

const Blockquote = (props: BoxProps) => {
  const bgColor = useColorModeValue("blue.50", "blue.900");

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return <Divider borderColor={borderColor} my={4} w="full" />;
};

const h1 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h1" size="xl" my={4} {...delegated}>
      {children}
    </Heading>
  );
};

const h2 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h2" fontWeight="bold" size="lg" {...delegated}>
      {children}
    </Heading>
  );
};

const h3 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h3" size="md" fontWeight="bold" {...delegated}>
      {children}
    </Heading>
  );
};


const h4 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h4" size="sm" fontWeight="bold" {...delegated}>
      {children}
    </Heading>
  );
};

const Link = ({
                href,
                as,
                replace,
                scroll,
                shallow,
                passHref,
                prefetch,
                locale,
                ...props
              }: LinkProps & NextLinkProps) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink as="a" {...props} />
    </NextLink>
  );
};

const ButtonLink = ({
                      href,
                      as,
                      replace,
                      scroll,
                      shallow,
                      passHref,
                      prefetch,
                      locale,
                      ...props
                    }: ButtonProps & NextLinkProps) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
    >
      <Button as="a" {...props} />
    </NextLink>
  );
};

const table = (props: BoxProps) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
);

const Th = (props: BoxProps) => {
  const bg = useColorModeValue("gray.50", "whiteAlpha.100");

  return <Box as="th" bg={bg} fontWeight="semibold" p={2} fontSize="sm" {...props} />;
};

const td = (props: BoxProps) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

export const mdxElements = {
  Image: (props: ImageProps) => <Image priority {...props} src={`/blog_images/${props.src}`} width={1501 / 2} height={712/2} placeholder='blur' blurDataURL={`/blog_images/${props.src}`} objectFit={'cover'} />,
  a: CustomLink,
  p,
  ul,
  ol,
  li,
  blockquote: Blockquote,
  hr: Hr,
  h1,
  h2,
  h3,
  h4,
  Link,
  ButtonLink,
  table,
  th: Th,
  td,
  Button,
  Stack,
  inlineCode: (props: CodeProps) => <Code colorScheme="yellow" fontSize="0.84em" {...props} />,
  YoutubeVideo:  dynamic(() => import('./youtube/youtube')),
};

