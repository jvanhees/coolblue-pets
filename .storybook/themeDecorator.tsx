import React from 'react';

import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import { AppContainer } from './../src/components/ui/app-container/AppContainer';
import theme from './../src/styles/theme';
import GlobalStyle from './../src/styles/GlobalStyle';

export const ThemeDecorator = Story => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        </MemoryRouter>
    );
};

export default ThemeDecorator;
