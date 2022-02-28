import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon as IconComponent } from './Icon';

import { ReactComponent as PinIcon } from 'assets/icons/pin.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';

export default {
    title: 'UI/Icon',
    component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

export const Icon: ComponentStory<typeof IconComponent> = () => (
    <>
        <IconComponent>
            <PinIcon />
        </IconComponent>
        <IconComponent primary={true}>
            <MenuIcon />
        </IconComponent>
        <IconComponent>
            <ClockIcon />
        </IconComponent>
        <IconComponent primary={true}>
            <HomeIcon />
        </IconComponent>
    </>
);
