import React from 'react';

import styled, { css } from 'styled-components';
import { Base } from './../base/Base';

type ButtonProps = {
    primary?: boolean;
    iconOnly?: boolean;
};

export const Button = styled(Base)<ButtonProps>`
    padding: 1em 2em;
    min-width: 160px;
    text-align: center;
    font-weight: bold;
    border: none;
    color: ${props => props.theme.palette.primary};
    background-color: ${props => props.theme.palette.white};

    ${props =>
        props.iconOnly &&
        css`
            width: 18px; // TODO: Fix line height on typography to align height of buttons
            height 18px;
            padding: 1em;
            min-width: auto;

            svg {
                width: 16px;
                height 16px;
            }

            path {
                fill: ${props.theme.palette.primary};
            }
        `}

    ${props =>
        props.primary &&
        css`
            color: ${props.theme.palette.white};
            background-color: ${props.theme.palette.primary};

            path {
                fill: ${props.theme.palette.white};
            }
        `}
`;
