import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    instagram: {
      500: '#E1306C',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  components: {
    Container: {
      sizes: {
        lg: {
          maxW: 'container.lg',
        },
      },
    },
  },
});

export default theme;
