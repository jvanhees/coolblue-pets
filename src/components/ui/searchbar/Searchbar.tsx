import React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../icon/Icon';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const BaseContainer = styled.div`
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.palette.shades.light};
    background-color: ${props => props.theme.palette.shades.light};
    border-radius: 1em;

    &:focus-within {
        border-color: ${props => props.theme.palette.primary};
        box-shadow: ${props => props.theme.shadow};
        background-color: ${props => props.theme.palette.white};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        border-color: ${props => props.theme.palette.shades.medium};
        background-color: ${props => props.theme.palette.white};
    }
`;

// This currently doesn't differ from base in styling
// TODO: Refactor dropdown behaviour into better code
// expanded means that there are results, so we don't show an empty search dropdown
const Container = styled(BaseContainer)<{ expanded?: boolean }>`
    position: relative;
    width: 100%;
    max-width: 600px;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 10em;

    ${props =>
        props.expanded &&
        css`
            &:focus-within {
                border-bottom: none;
                border-radius: 1em 1em 0 0;

                > div {
                    visibility: visible;
                }
            }
        `}
`;

const IconContainer = styled(Icon)`
    flex-grow: 0;
    margin-right: 1em;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: stretch;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    background: none;
    font-size: ${props => props.theme.typography.fontSize};
    color: ${props => props.theme.palette.black};
`;

const ChildrenContainer = styled(BaseContainer)`
    visibility: hidden;
    position: absolute;
    left: -1px; // Account for border
    right: -1px;
    top: 100%;
    padding: 0 1em 0.5em;
    border-radius: 0 0 1em 1em;
    border-top: none;
    border-color: ${props => props.theme.palette.primary};
    box-shadow: ${props => props.theme.shadow};
    background-color: ${props => props.theme.palette.white};

    // Hide shadow on top
    :after {
        content: '';
        height: 5px;
        background-color: ${props => props.theme.palette.white};
        position: absolute;
        top: -5px;
        left: 0;
        right: 0;
    }
`;

type SearchbarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    expanded?: boolean;
};

export const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, expanded = false, children }) => {
    return (
        <Container expanded={expanded}>
            <InputContainer>
                <IconContainer primary>
                    <SearchIcon />
                </IconContainer>
                <Input value={value} onChange={onChange} type="search" aria-label="Search pets" />
            </InputContainer>
            {expanded && <ChildrenContainer>{children}</ChildrenContainer>}
        </Container>
    );
};
