import React from 'react';

import styled, { css } from 'styled-components';
import { Base } from './../base/Base';

import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';

type ButtonProps = {
    primary?: boolean;
};

export const ButtonElement = styled(Base.withComponent('button'))<ButtonProps>`
    text-align: center;
    font-weight: bold;
    border: none;
    color: ${props => props.theme.palette.primary};
    background-color: ${props => props.theme.palette.white};
    min-width: auto;
    font-size: 0; // Hide text on mobile

    svg {
        width: 24px;
        height 24px;
        margin: 0.6rem;
    }

    path {
        fill: none;
        stroke: ${props => props.theme.palette.white};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        width: auto;
        height: auto;
        min-width: 160px;
        padding: 1em 2em;
        font-size: ${props => props.theme.typography.fontSize};

        svg {
            display: none
        };
    }

    ${props =>
        props.primary &&
        css`
            color: ${props.theme.palette.white};
            background-color: ${props.theme.palette.primary};

            :hover {
                background-color: ${props.theme.palette.primaryDark};
            }
        `}
`;

export const Button: React.FC<ButtonProps> = ({ primary = false, ...props }) => {
    return (
        <ButtonElement primary={primary}>
            {props.children}
            <ArrowRight />
        </ButtonElement>
    );
};
