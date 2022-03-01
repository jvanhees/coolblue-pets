import React from 'react';
import { Heading } from 'components/typography/heading/Heading';
import { Search } from 'components/elements/search/Search';
import { SearchResults } from 'components/elements/search-results/SearchResults';
import { SearchFilters } from 'components/elements/search-filters/SearchFilters';
import { Hero } from 'components/elements/hero/Hero';
import { Section } from 'components/ui/section/Section';
import { Categories } from 'components/elements/categories/Categories';

export const Home: React.FC = () => {
    return (
        <>
            <Section>
                <Heading level={1} as="h1">
                    Pets
                </Heading>
                <Search />
                <SearchFilters />
            </Section>
            <Section>
                <Heading level={2} as="h2">
                    Results
                </Heading>
                <SearchResults />
            </Section>
            <Section>
                <Hero />
            </Section>
            <Section>
                <Heading level={2} as="h2">
                    Categories
                </Heading>
                <Categories />
            </Section>
        </>
    );
};
