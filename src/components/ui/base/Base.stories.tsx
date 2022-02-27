import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Base } from './Base';

export default {
    component: Base,
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = args => <Base {...args}>Basic UI element</Base>;

export const Primary = Template.bind({});
