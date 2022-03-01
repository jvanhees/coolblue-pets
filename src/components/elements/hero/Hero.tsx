import React from 'react';
import styled from 'styled-components';

import HeroImageFile from 'assets/images/treats.jpeg';
import { Button } from 'components/ui/button/Button';
import { Text } from 'components/typography/text/Text';
import { Heading } from 'components/typography/heading/Heading';

// TODO: Refactor this

const HeroContainer = styled.div`
    width: auto;
    margin: 0 -1em 2em;
    margin-bottom: 2em;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        flex-direction: row-reverse;
        align-items: stretch;
        align-content: strecth;
        border-radius: 1em;
        margin: 0 0 2em;
    }
`;

const HeroImage = styled.div`
    height: 200px;
    background-image: url(${HeroImageFile});
    background-size: cover;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        height: auto;
        flex: 1;
    }
`;

const HeroDescription = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1em;
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.white};

    // Dirty hack
    button {
        background-color: ${props => props.theme.palette.primary};
    }

    h2 {
        flex-grow: 1;
    }

    p {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: start;
        flex: 1;
        max-width: 40%;
        padding: 5em 5em 5em 2em;

        button {
            background-color: ${props => props.theme.palette.white};
        }

        p {
            display: block;
        }
    }
`;

export const Hero: React.FC = () => {
    return (
        <HeroContainer>
            <HeroDescription>
                <Heading level={2} as="h2">
                    Pets directory
                </Heading>
                <Text>See all pets available for adoption, promote them and get them a home.</Text>
                <Button>See all</Button>
            </HeroDescription>
            <HeroImage />
        </HeroContainer>
    );
};
