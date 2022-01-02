import { ChakraContainer, ChakraFooter, ChakraHeader, ethicalClothesTheme, Meta } from "@bakate-organization/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";

export interface PageProps {
  children?: React.ReactElement;
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on('routeChangeComplete', () => NProgress.done());

export function Page({ children }: PageProps) {
  const links = [
    {
      href: '/',
      label: 'home',
    },
    { href: '/about', label: 'about' },
  ];
  const color = ["black", "white"]
  const bg = ["gray.100", "gray.700"]

  return (
    <ChakraProvider theme={ethicalClothesTheme}>
      <Meta
        title={'bakate-blog'}
        description={
          'a blog to share my knowledge about JavaScript, frontend and backend development'
        }
        url={'/nprogress.css'}
        favicon={'/favicons/favicon.ico'}
      />
      <ChakraHeader bgColorProp={bg} colorProp={color} linksProp={links}  />
      <ChakraContainer isCentered={true}>{children}</ChakraContainer>
      <ChakraFooter bgColorProp={bg} colorProp={color} />
    </ChakraProvider>
  );
}
