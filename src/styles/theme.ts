// theme.ts
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: string;
            primaryDark: string;
            secondary: string;
            secondaryDark: string;
            accent: string;
            white: string;
            black: string;
            shades: string[];
        };
        typography: {
            fontSize: number;
            headerFontSize: string[];
            mobileHeaderFontSize: string[];
        };
        breakpoints: {
            mobile: string;
        };
    }
}

const theme: DefaultTheme = {
    palette: {
        primary: '#2B6DB1',
        primaryDark: '#285DAB',
        secondary: '#F8CF47',
        secondaryDark: '#E0B833',
        accent: '#BF2C23',
        white: '#FFFFFF',
        black: '#111111',
        shades: ['#F0F0F0', '#DDDDDD', '#666666'],
    },
    typography: {
        fontSize: 16,
        // Headers start with 1, arrays with 0 so include 1 dud
        headerFontSize: ['0px', '33px', '28px', '23px', '18px'],
        mobileHeaderFontSize: ['0px', '26px', '23px', '20px', '18px'],
    },
    breakpoints: {
        mobile: '480px',
    },
};

export default theme;
