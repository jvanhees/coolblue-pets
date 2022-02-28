import React from 'react';
import styled from 'styled-components';

import { ReactComponent as PetIcon } from 'assets/icons/pet-icon.svg';

const HeaderContainer = styled.header`
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    background-color: ${props => props.theme.palette.secondary};
`;

const LogoContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <PetIcon />
            </LogoContainer>
        </HeaderContainer>
    );
};
