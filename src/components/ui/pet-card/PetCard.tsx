import { Heading } from 'components/typography/heading/Heading';
import { Pet } from 'interfaces/Pets';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';

const PetCardContainer = styled.div``;

const PetCardImg = styled.img`
    width: 100%;
    border-radius: 1em;
    aspect-ratio: 1.2;
    object-fit: cover;
`;

export const PetCard: React.FC<{ pet: Pet }> = ({ pet }) => {
    return (
        <PetCardContainer>
            <picture>
                <PetCardImg src={pet.photo} />
            </picture>
            <Heading level={4} as="h3">
                {pet.title}&nbsp;
            </Heading>
            <Button primary>View</Button>
        </PetCardContainer>
    );
};
