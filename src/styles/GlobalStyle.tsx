import { createGlobalStyle } from 'styled-components';

// TODO: replace Google Font API with local fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.palette.black};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
