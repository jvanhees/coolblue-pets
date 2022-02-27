import styled, { css } from 'styled-components';

// This element ensures SVG styling for regular icons
type IconProps = {
    primary?: boolean;
};

export const Icon = styled.span<IconProps>`
    & path {
        ${props =>
            props.primary &&
            css`
                fill: ${props => props.theme.palette.primary};
            `}
    }
`;
