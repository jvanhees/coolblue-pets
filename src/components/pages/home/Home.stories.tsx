import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Home as HomeComponent } from './Home';

export default {
    title: 'Pages/Home',
    component: HomeComponent,
    parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof HomeComponent>;

export const Home: ComponentStory<typeof HomeComponent> = () => <HomeComponent />;
