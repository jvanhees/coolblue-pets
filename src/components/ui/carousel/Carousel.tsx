import styled, { css } from 'styled-components';

type CarouselProps = {
    columns: number;
    items: number;
    scrollable?: boolean;
};

// Use margins instead of grid-gap since grid-gap doesn't align properly
export const Carousel = styled.div<CarouselProps>`
    display: grid;
    grid-gap: 0em;
    overflow-x: auto;
    margin-left: -0.5em;
    margin-right: -0.5em;
    ${props =>
        props.scrollable
            ? css`
                  grid-template-columns: repeat(${props.items}, calc(100% / 1.5));
              `
            : css`
                  grid-template-columns: 100%;
              `}

    > * {
        margin-left: 0.5em;
        margin-right: 0.5em;
        margin-bottom: 1em;

        :last-child {
            margin-bottom: 0;
        }
    }

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: repeat(${props => props.items}, calc(100% / ${props => props.columns}));

        > * {
            margin-bottom: 0em;
        }
    }
`;
