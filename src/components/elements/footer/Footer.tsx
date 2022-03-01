import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    height: 5em;
    margin-top: auto;
    background-color: ${props => props.theme.palette.primary};
`;

export const Footer: React.FC = () => {
    return <FooterContainer></FooterContainer>;
};
