import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './text/Text';
import { Heading } from './heading/Heading';

export default {
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => (
    <>
        <Heading level={1}>Heading 1</Heading>
        <Heading as="h2" level={2}>
            Heading 2
        </Heading>
        <Heading as="h3" level={3}>
            Heading 3
        </Heading>
        <Heading as="h4" level={4}>
            Heading 4
        </Heading>
        <Text>Body text</Text>
    </>
);

export const Typography = Template.bind({});
