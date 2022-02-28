import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Base as BaseComponent } from './Base';

export default {
    title: 'UI/Base',
    component: BaseComponent,
} as ComponentMeta<typeof BaseComponent>;

export const Base: ComponentStory<typeof BaseComponent> = args => (
    <BaseComponent {...args}>Basic UI element</BaseComponent>
);
