import React from 'react';
import { Heading } from 'components/typography/heading/Heading';
import { Search } from 'components/elements/search/Search';
import { SearchResults } from 'components/elements/search-results/SearchResults';

export const Home: React.FC = () => {
    return (
        <>
            <Heading level={1} as="h1">
                Pets
            </Heading>
            <Search />
            <Heading level={2} as="h2">
                Results
            </Heading>
            <SearchResults />
        </>
    );
};
