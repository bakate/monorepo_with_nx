import {
  ethicalClothesTheme,
  ChakraHeader,
  ChakraContainer,
  Meta,
} from '@bakate-organization/chakra-ui';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';

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
    { href: '/articles', label: 'articles' },
    { href: '/about', label: 'about' },
  ];

  return (
    <ChakraProvider theme={ethicalClothesTheme}>
      <Meta
        title={'bakate-blog'}
        description={
          'a blog to share my knowledge about JavaScript, frontend and backend development'
        }
        url={'/nprogress.css'}
      />
      <ChakraHeader linksProp={links} title={'Tech Blog'} />
      <ChakraContainer>{children}</ChakraContainer>
    </ChakraProvider>
  );
}
