import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbar as SearchbarComponent } from './Searchbar';

export default {
    title: 'UI/Searchbar',
    component: SearchbarComponent,
} as ComponentMeta<typeof SearchbarComponent>;

export const Searchbar: ComponentStory<typeof SearchbarComponent> = () => {
    const [value, setValue] = useState<string>('');

    return (
        <>
            <p>Current value: {value}</p>
            <SearchbarComponent value={value} onChange={e => setValue(e.target.value)} />

            <SearchbarComponent value={value} onChange={e => setValue(e.target.value)}>
                <span>An inline result</span>
                <span>Another result</span>
            </SearchbarComponent>
        </>
    );
};
