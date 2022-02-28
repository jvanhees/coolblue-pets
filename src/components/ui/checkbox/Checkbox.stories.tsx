import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox as CheckboxComponent } from './Checkbox';

export default {
    title: 'UI/Checkbox',
    component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

export const Checkbox: ComponentStory<typeof CheckboxComponent> = () => (
    <>
        <div>
            <CheckboxComponent label="Unchecked" />
        </div>
        <div>
            <CheckboxComponent label="Checked" checked />
        </div>
    </>
);
