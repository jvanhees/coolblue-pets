import styled from 'styled-components';
import React from 'react';
import { Pet } from 'interfaces/Pets';
import { SearchHint } from 'components/ui/search-hint/SearchHint';

const SuggestionContainer = styled.div`
    border-top: 1px solid ${props => props.theme.palette.shades.medium};
    padding-top: 0.5em;
`;

type SearchSuggestionsProps = {
    suggestions: Pet[];
    input: string;
    onSuggestionSelect: (suggestion: string) => void;
};

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, input, onSuggestionSelect }) => {
    return (
        <SuggestionContainer>
            {suggestions.map((pet, index) => (
                <SearchHint key={index} input={input} hint={pet.title} onSuggestionSelect={onSuggestionSelect} />
            ))}
        </SuggestionContainer>
    );
};
