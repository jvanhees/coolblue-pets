import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PetCard as PetCardComponent } from './PetCard';
import { PetMock } from 'mocks/PetMock';

export default {
    title: 'UI/Pet Card',
    component: PetCardComponent,
} as ComponentMeta<typeof PetCardComponent>;

export const PetCard: ComponentStory<typeof PetCardComponent> = () => {
    return <PetCardComponent pet={PetMock[0]} />;
};
