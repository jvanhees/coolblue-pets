import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './../src/styles/theme';
import GlobalStyle from './../src/styles/GlobalStyle';

export const ThemeDecorator = Story => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    );
};

export default ThemeDecorator;
