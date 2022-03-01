import styled from 'styled-components';

export const Base = styled.div`
    display: inline-block;
    padding: 0.5em 1em;
    margin-right: 1em;
    font-size: ${props => props.theme.typography.fontSize};
    border-radius: 200px;
    border: 1px solid ${props => props.theme.palette.shades.light};
    background-color: ${props => props.theme.palette.white};
    cursor: pointer;
    outline: none;

    &:hover {
        font-weight: bold;
        border-width: 2px;
        border-color: ${props => props.theme.palette.primary};
        background-color: ${props => props.theme.palette.primaryBg};
    }
`;
