import { createGlobalStyle } from 'styled-components';

// TODO: replace Google Font API with local fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  body {
    color: ${props => props.theme.palette.black};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};
  }
`;

export default GlobalStyle;
