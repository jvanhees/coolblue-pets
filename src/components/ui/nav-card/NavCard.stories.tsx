import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavCard as NavCardComponent } from './NavCard';

import { ReactComponent as Icon } from 'assets/icons/heart.svg';

export default {
    title: 'UI/Navigation Card',
    component: NavCardComponent,
} as ComponentMeta<typeof NavCardComponent>;

export const NavCard: ComponentStory<typeof NavCardComponent> = () => (
    <>
        <NavCardComponent title="Navigation card" Icon={Icon}></NavCardComponent>
    </>
);
