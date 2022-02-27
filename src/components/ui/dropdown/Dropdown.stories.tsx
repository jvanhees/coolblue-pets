import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => (
    <Dropdown>
        <option>Dann</option>
        <option>Annemie</option>
        <option>Daamin</option>
    </Dropdown>
);

export const Primary = Template.bind({});
