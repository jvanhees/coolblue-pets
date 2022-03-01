import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePet } from 'hooks/usePet';
import { PetSpecs } from 'components/elements/pet-specs/PetSpecs';
import styled from 'styled-components';
import { Heading } from 'components/typography/heading/Heading';

const DetailContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: 50% 50%;
        grid-template-rows: min-content 1fr;
        column-gap: 2em;
        margin-bottom: 3em;
        width: calc(100% - 2em);
    }
`;

const PetTitle = styled.div`
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`;

const PetImg = styled.img`
    margin: 0 -1em;
    width: calc(100% + 2em);

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        grid-column-start: 1;
        grid-row-start: 1;
        grid-row-end: span 2;
        margin: 0;
        width: 100%;
        border-radius: 1em;
    }
`;

const SpecsContainer = styled.div`
    margin: 2em 0;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        grid-column-start: 2;
        grid-row-start: 2;
    }
`;

export const Detail: React.FC = () => {
    const params = useParams<{ petId: string }>();
    const [{ result, loading }, setId] = usePet();

    useEffect(() => {
        if (params.petId) setId(parseInt(params.petId));
    }, [params]);

    if (loading) return <p>Loading...</p>;

    if (result)
        return (
            <DetailContainer>
                <PetTitle>
                    <Heading level={1} as="h1">
                        {result.title}
                    </Heading>
                </PetTitle>
                <PetImg src={result.photo} />
                <SpecsContainer>
                    <PetSpecs pet={result}></PetSpecs>
                </SpecsContainer>
            </DetailContainer>
        );

    return <p>Can't find your pet</p>;
};
