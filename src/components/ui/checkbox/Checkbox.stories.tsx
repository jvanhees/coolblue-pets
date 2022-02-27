import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Icons: ComponentStory<typeof Checkbox> = () => (
    <>
        <div>
            <Checkbox label="Unchecked" />
        </div>
        <div>
            <Checkbox label="Checked" checked />
        </div>
    </>
);
