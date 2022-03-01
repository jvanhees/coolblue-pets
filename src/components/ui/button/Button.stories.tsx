import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';

export default {
    title: 'UI/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Text</Button>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    primary: true,
};
Secondary.args = {
    primary: false,
};
