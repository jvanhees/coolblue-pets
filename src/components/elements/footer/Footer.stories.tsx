import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer as FooterComponent } from './Footer';

export default {
    title: 'Elements/Footer',
    component: FooterComponent,
    parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof FooterComponent>;

export const Footer: ComponentStory<typeof FooterComponent> = () => <FooterComponent />;
