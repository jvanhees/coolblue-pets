import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown as DropdownComponent } from './Dropdown';

export default {
    title: 'UI/Dropdown',
    component: DropdownComponent,
} as ComponentMeta<typeof DropdownComponent>;

export const Dropdown: ComponentStory<typeof DropdownComponent> = () => (
    <DropdownComponent>
        <option>Dann</option>
        <option>Annemie</option>
        <option>Daamin</option>
    </DropdownComponent>
);
