import styled from 'styled-components';

type CarouselProps = {
    columns: number;
    items: number;
};

export const Carousel = styled.div<CarouselProps>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
        ${props => props.items},
        calc(calc(100% - ${props => props.columns + 1}em) / ${props => props.columns})
    ); // Hmm...
    grid-gap: 2em;
    overflow-x: auto;
    padding-bottom: 1em;
`;
