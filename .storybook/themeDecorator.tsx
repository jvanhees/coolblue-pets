import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './../src/styles/theme';

export const ThemeDecorator = Story => {
    return (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    );
};

export default ThemeDecorator;
