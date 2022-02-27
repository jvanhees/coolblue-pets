import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbar } from './Searchbar';

export default {
    component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

export const SearchbarStory: ComponentStory<typeof Searchbar> = () => {
    const [value, setValue] = useState<string>('');

    return (
        <>
            <p>Current value: {value}</p>
            <Searchbar value={value} onChange={e => setValue(e.target.value)} />
            <Searchbar value={value} onChange={e => setValue(e.target.value)} contained={true} />

            <Searchbar value={value} onChange={e => setValue(e.target.value)} contained={true}>
                <span>An inline result</span>
                <span>Another result</span>
            </Searchbar>
        </>
    );
};
