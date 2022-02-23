import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import GlobalStyle from './styles/GlobalStyle';
import { Button } from './components/button/Button';
import { Heading } from './components/typography/heading/Heading';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle>
                <div className="App">
                    <Heading level={1} as="h1">
                        Heading 1
                    </Heading>
                    <Button primary={true}>Hello</Button>
                </div>
            </GlobalStyle>
        </ThemeProvider>
    );
};

export default App;
