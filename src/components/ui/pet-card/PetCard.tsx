import { Link } from 'react-router-dom';

import { Heading } from 'components/typography/heading/Heading';
import { Pet } from 'interfaces/Pets';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';

const PetCardContainer = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        align-items: start;
        flex-direction: column;
    }
`;

const PetCardPicture = styled.picture`
    max-width: 45%;
    margin-right: 1.5em;
    aspect-ratio: 1.2;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        max-width: 100%;
        width: 100%;
        margin-right: 0;
    }
`;

const PetCardTitle = styled.div`
    flex-grow: 1;
`;

// Maybe better performance with css scaling?
const PetCardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1em;
    object-fit: cover;
    image-rendering: -webkit-optimize-contrast;
`;

export const PetCard: React.FC<{ pet: Pet }> = ({ pet }) => {
    return (
        <PetCardContainer>
            <PetCardPicture>
                <PetCardImg src={pet.photo} />
            </PetCardPicture>
            <PetCardTitle>
                <Heading level={4} as="h3">
                    {pet.title}&nbsp;
                </Heading>
            </PetCardTitle>
            <Link to={`/${pet.id}`}>
                <Button primary={true}>View</Button>
            </Link>
        </PetCardContainer>
    );
};
