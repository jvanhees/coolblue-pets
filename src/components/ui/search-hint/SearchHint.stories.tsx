import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchHint as SearchHintComponent } from './SearchHint';

export default {
    title: 'UI/Search Hint',
    component: SearchHintComponent,
} as ComponentMeta<typeof SearchHintComponent>;

export const SearchHint: ComponentStory<typeof SearchHintComponent> = () => {
    return <SearchHintComponent input="Cool" hint="Coolblue" onSuggestionSelect={hint => alert(hint)} />;
};
