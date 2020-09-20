import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/core';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <App />

      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


