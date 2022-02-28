import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

export default {
    title: 'Elements/Header',
    component: HeaderComponent,
    parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof HeaderComponent>;

export const Header: ComponentStory<typeof HeaderComponent> = () => <HeaderComponent />;
