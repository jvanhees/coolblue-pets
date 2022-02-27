// theme.ts
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: string;
            primaryDark: string;
            primaryBg: string;
            secondary: string;
            secondaryDark: string;
            accent: string;
            white: string;
            black: string;
            shades: {
                light: string;
                medium: string;
                dark: string;
            };
        };
        typography: {
            fontSize: string;
            headerFontSize: string[];
            mobileHeaderFontSize: string[];
            fontFamily: string;
        };
        breakpoints: {
            mobile: string;
        };
        shadow: string;
    }
}

const theme: DefaultTheme = {
    palette: {
        primary: '#2B6DB1',
        primaryDark: '#285DAB',
        primaryBg: '#f1f7fd', // This isn't in the styleguide but is used in components
        secondary: '#F8CF47',
        secondaryDark: '#E0B833',
        accent: '#BF2C23',
        white: '#FFFFFF',
        black: '#111111',
        shades: {
            light: '#F0F0F0',
            medium: '#DDDDDD',
            dark: '#666666',
        },
    },
    typography: {
        fontSize: '16px',
        // Headers start with 1, arrays with 0 so include 1 dud
        headerFontSize: ['0px', '33px', '28px', '23px', '18px'],
        mobileHeaderFontSize: ['0px', '26px', '23px', '20px', '18px'],
        fontFamily: "'Open Sans', sans-serif",
    },
    breakpoints: {
        mobile: '480px',
    },
    shadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
};

export default theme;
