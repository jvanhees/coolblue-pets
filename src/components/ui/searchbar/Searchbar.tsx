import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../icon/Icon';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

// This currently doesn't differ from base in styling
// Use element for semantics
const Container = styled.div<{ contained: boolean }>`
    width: 100%;
    padding: 1em;
    display: flex;
    align-items: stretch;
    border-radius: 1em;
    border: 1px solid ${props => props.theme.palette.shades.medium};

    &:focus-within {
        border-color: ${props => props.theme.palette.primary};
        box-shadow: ${props => props.theme.shadow};
        background-color: ${props => props.theme.palette.white};
    }

    ${props =>
        props.contained &&
        css`
            border: 1px solid ${props => props.theme.palette.shades.light};
            background-color: ${props => props.theme.palette.shades.light};
        `}
`;

const IconContainer = styled(Icon)`
    flex-grow: 0;
    margin-right: 1em;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    background: none;
    font-size: ${props => props.theme.typography.fontSize};
    color: ${props => props.theme.palette.black};
`;

const ResultsContainer = styled.div`
    border-top: ${props => props.theme.palette.shades.medium};
`;

type SearchbarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    contained?: boolean;
};

export const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, contained = false, children }) => {
    return (
        <Container contained={contained}>
            <IconContainer primary>
                <SearchIcon />
            </IconContainer>
            <Input value={value} onChange={onChange} />
            {children && <ResultsContainer>{children}</ResultsContainer>}
        </Container>
    );
};
