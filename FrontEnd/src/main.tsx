import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { customTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
      theme={customTheme}
      toastOptions={{ defaultOptions: { position: 'top-right' } }}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
