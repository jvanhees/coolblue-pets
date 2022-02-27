import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pill } from './Pill';

export default {
    component: Pill,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = args => (
    <>
        <Pill {...args}>Pill 1</Pill>
        <Pill {...args}>Pill 2</Pill>
        <Pill {...args}>Pill 3</Pill>
    </>
);

export const Primary = Template.bind({});
