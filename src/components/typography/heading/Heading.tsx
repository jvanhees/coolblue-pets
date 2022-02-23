import styled from 'styled-components';

type HeadingProps = {
    level: 1 | 2 | 3 | 4;
};

export const Heading = styled.h1<HeadingProps>`
    font-weight: bold;
    font-size: ${props => props.theme.typography.headerFontSize[props.level]};
    @media (max-width: 480px) {
        font-size: ${props => props.theme.typography.mobileHeaderFontSize[props.level]};
    }
`;
