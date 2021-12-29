import { ethicalClothesTheme } from "@bakate-organization/chakra-ui";
import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
        <ColorModeScript
          initialColorMode={ethicalClothesTheme.config?.initialColorMode}
        />
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
