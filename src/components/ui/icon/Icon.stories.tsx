import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

import { ReactComponent as PinIcon } from 'assets/icons/pin.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';

export default {
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const Icons: ComponentStory<typeof Icon> = () => (
    <>
        <Icon>
            <PinIcon />
        </Icon>
        <Icon primary={true}>
            <MenuIcon />
        </Icon>
        <Icon>
            <ClockIcon />
        </Icon>
        <Icon primary={true}>
            <HomeIcon />
        </Icon>
    </>
);
