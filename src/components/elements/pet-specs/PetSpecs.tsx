import { Label } from 'components/typography/label/Label';
import { Text } from 'components/typography/text/Text';
import { Pet } from 'interfaces/Pets';
import React from 'react';
import styled from 'styled-components';
const PetSpecsContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;
const SpecContainer = styled.div`
    padding-right: 1em;
`;

export const PetSpecs: React.FC<{ pet: Pet }> = ({ pet }) => {
    // The date formatting is weird in NL with EN labels but that is in the design :)
    const now = new Date();
    const age = now.getFullYear() - pet.birthYear;
    return (
        <PetSpecsContainer>
            <SpecContainer>
                <Label>Type</Label>
                <Text>{pet.species}</Text>
            </SpecContainer>
            <SpecContainer>
                <Label>Date added</Label>
                <Text>{new Intl.DateTimeFormat('nl-NL', { dateStyle: 'long' }).format(pet.dateAdded)}</Text>
            </SpecContainer>
            <SpecContainer>
                <Label>Age</Label>
                <Text>
                    {age} year{age > 1 && 's'}
                </Text>
            </SpecContainer>
            <SpecContainer>
                <Label>Category</Label>
                <Text>Small pet</Text>
            </SpecContainer>
        </PetSpecsContainer>
    );
};
