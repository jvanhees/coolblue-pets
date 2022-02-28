import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import theme from './styles/theme';

import GlobalStyle from './styles/GlobalStyle';
import { Header } from 'components/elements/header/Header';
import { AppContainer } from 'components/ui/app-container/AppContainer';
import { Home } from 'components/pages/home/Home';
import { AppProvider } from 'context/AppContext';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <GlobalStyle />
                <Header></Header>
                <AppContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AppContainer>
            </AppProvider>
        </ThemeProvider>
    );
};

export default App;
