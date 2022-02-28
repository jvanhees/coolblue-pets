import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel as CarouselComponent } from './Carousel';
import styled from 'styled-components';

const ExampleItem = styled.div`
    background-color: red;
    height: 400px;
`;

export default {
    title: 'UI/Carousel',
    component: CarouselComponent,
} as ComponentMeta<typeof CarouselComponent>;

export const Carousel: ComponentStory<typeof CarouselComponent> = () => {
    return (
        <CarouselComponent items={5} columns={3}>
            <ExampleItem />
            <ExampleItem />
            <ExampleItem />
            <ExampleItem />
            <ExampleItem />
        </CarouselComponent>
    );
};
