import React from 'react';
import styled from 'styled-components';

// Use StyledCheckbox for checkboxes without label
export const StyledCheckbox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    vertical-align: middle;
    width: 1.5em;
    height: 1.5em;
    padding: 0;
    border-radius: 2px;
    border: 1px solid ${props => props.theme.palette.shades.medium};

    &:checked {
        background-color: ${props => props.theme.palette.primary};
    }

    &:checked + span {
        font-weight: bold;
    }
`;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
    return (
        <label>
            <StyledCheckbox {...props} type="checkbox" />
            <span>{label}</span>
        </label>
    );
};
