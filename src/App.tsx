import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import theme from './styles/theme';

import GlobalStyle from './styles/GlobalStyle';
import { Header } from 'components/elements/header/Header';
import { AppWrapper } from 'components/ui/app-wrapper/AppWrapper';
import { AppContainer } from 'components/ui/app-container/AppContainer';
import { Home } from 'components/pages/home/Home';
import { AppProvider } from 'context/AppContext';
import { Footer } from 'components/elements/footer/Footer';
import { Detail } from 'components/pages/detail/Detail';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <AppWrapper>
                    <GlobalStyle />
                    <Header />
                    <AppContainer>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/:petId" element={<Detail />} />
                        </Routes>
                    </AppContainer>
                    <Footer />
                </AppWrapper>
            </AppProvider>
        </ThemeProvider>
    );
};

export default App;
