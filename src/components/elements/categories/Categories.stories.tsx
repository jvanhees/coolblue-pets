import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Categories as CategoriesComponent } from './Categories';

export default {
    title: 'Elements/Categories',
    component: CategoriesComponent,
    parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof CategoriesComponent>;

export const Categories: ComponentStory<typeof CategoriesComponent> = () => <CategoriesComponent />;
