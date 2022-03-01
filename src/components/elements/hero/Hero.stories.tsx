import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hero as HeroComponent } from './Hero';

export default {
    title: 'Elements/Hero',
    component: HeroComponent,
} as ComponentMeta<typeof HeroComponent>;

export const Hero: ComponentStory<typeof HeroComponent> = () => <HeroComponent />;
