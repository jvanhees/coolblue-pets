import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppContainer as AppContainerComponent } from './AppContainer';
import styled from 'styled-components';

const VisualAppContainer = styled(AppContainerComponent)`
    background-color: red;
    height: 500px;
`;

export default {
    title: 'Components/App Container',
    component: AppContainerComponent,
    parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof AppContainerComponent>;

export const AppContainer: ComponentStory<typeof AppContainerComponent> = () => (
    <VisualAppContainer>Contents go here!</VisualAppContainer>
);
