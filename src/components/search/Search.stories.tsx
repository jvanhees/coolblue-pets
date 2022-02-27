import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search, SearchGetResults } from './Search';

export default {
    component: Search,
} as ComponentMeta<typeof Search>;

type ExampleResult = {
    title: string;
    description: string;
};

export const SearchStory: ComponentStory<typeof Search> = args => {
    const mockGetResults: SearchGetResults<ExampleResult> = async () => {
        return [
            {
                title: 'test 1',
                description: 'This is the first item',
            },
            {
                title: 'Test 2',
                description: 'This is the second item',
            },
        ];
    };

    const handleResultSelect = (result: ExampleResult) => {
        alert(result.title);
    };

    return <Search getResults={mockGetResults} onResultSelect={handleResultSelect} />;
};
