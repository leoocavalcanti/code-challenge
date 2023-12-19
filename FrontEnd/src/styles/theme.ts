// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        /* 	bg: '#161A2B', */
        bg: '#16182D',
        color: '#000000',
      },
      button: {
        cursor: 'pointer',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    blue: {
      100: 'rgba(33, 42, 62, 0.3)',
      200: '#16182D',
      300: '#212A3E',
      400: '#3C486B',
    },
    white: {
      800: '#D9D9D9',
      900: '#F1F6F9',
      1000: '#FFFFFF',
    },
    yellow: {
      500: '#F4B700',
    },
    black: {
      500: '#000000',
    },
    orange: {
      500: '#F2A97F',
    },
    green: {
      500: '#BEF493',
    },
    red: {
      500: '#FF4D4D',
    },
  },
});
