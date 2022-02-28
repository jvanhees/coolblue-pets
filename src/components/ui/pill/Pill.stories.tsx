import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pill as PillComponent } from './Pill';

export default {
    title: 'UI/Pill',
    component: PillComponent,
} as ComponentMeta<typeof PillComponent>;

export const Pill: ComponentStory<typeof PillComponent> = args => (
    <>
        <PillComponent {...args}>Pill 1</PillComponent>
        <PillComponent {...args}>Pill 2</PillComponent>
        <PillComponent {...args}>Pill 3</PillComponent>
    </>
);
