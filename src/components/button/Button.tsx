import React from 'react';

import styled, { css } from 'styled-components';

type ButtonProps = {
    primary?: boolean;
    iconOnly?: boolean;
};

export const Button = styled.button<ButtonProps>`
    padding: 1em;
    min-width: 200px;
    border-radius: 200px;
    text-align: center;
    font-weight: bold;
    border: none;
    ${props =>
        props.primary
            ? css`
                  color: ${props.theme.palette.white};
                  background-color: ${props.theme.palette.primary};
              `
            : css`
                  color: ${props.theme.palette.primary};
                  background-color: ${props.theme.palette.white};
              `}
`;
