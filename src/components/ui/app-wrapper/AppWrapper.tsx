import styled from 'styled-components';

// Ensures a proper footer at the bottom of the page, wraps entire app
// including header and footer.
export const AppWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
`;
