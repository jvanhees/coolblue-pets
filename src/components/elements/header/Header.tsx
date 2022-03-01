import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import PetIcon from 'assets/icons/pet-icon.svg';
import PetIconSmall from 'assets/icons/pet-icon-small.svg';

const HeaderContainer = styled.header`
    box-sizing: border-box;
    width: 100%;
    padding: 1em;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        margin-bottom: 3em;
        background-color: ${props => props.theme.palette.secondary};
    }
`;

const LogoContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Header: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const media = `(min-width: ${themeContext.breakpoints.mobile})`;
    return (
        <HeaderContainer>
            <Link to="/" aria-label="Navigate to home">
                <LogoContainer>
                    <picture>
                        <source type="image/svg+xml" srcSet={PetIcon} media={media} />
                        <source type="image/svg+xml" srcSet={PetIconSmall} />
                        <img src={PetIcon} alt="Logo" />
                    </picture>
                </LogoContainer>
            </Link>
        </HeaderContainer>
    );
};
