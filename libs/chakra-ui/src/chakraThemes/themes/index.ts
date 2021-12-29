import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { theme as base } from '@chakra-ui/theme';
import { ethicalColorPalette } from './colorPalette';
import { ethicalClothesComponentsStyles } from './componentsStyles';
import { ethicalClothesGlobalStyles } from './globalStyles';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const ethicalClothesOverrides = {
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Alice, ${base.fonts?.body}`,
  },
  colors: { ...ethicalColorPalette },
  styles: { ...ethicalClothesGlobalStyles },
  components: {
    ...ethicalClothesComponentsStyles,
  },
  config: { ...config },
};
export const ethicalClothesTheme = extendTheme(
    ethicalClothesOverrides,
    withDefaultColorScheme({
      colorScheme: 'teal',
      components: ['Button'],
    }),
    withDefaultVariant({
      variant: 'filled',
      components: ['Input', 'Select', 'Textarea'],
    })
  );
