import styled from 'styled-components';
import React from 'react';
import { Pet } from 'interfaces/Pets';

const SuggestionContainer = styled.div`
    border-top: 1px solid ${props => props.theme.palette.shades.medium};
    padding-top: 0.5em;
`;

const Suggestion = styled.button`
    display: block;
    padding: 1em 0;
    background: none;
    border: none;
`;

type SearchSuggestionsProps = {
    suggestions: Pet[];
    onSuggestionSelect: (suggestion: string) => void;
};

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, onSuggestionSelect }) => {
    return (
        <SuggestionContainer>
            {suggestions.map((pet, index) => (
                <Suggestion key={index} onClick={() => onSuggestionSelect(pet.title)}>
                    {pet.title}
                </Suggestion>
            ))}
        </SuggestionContainer>
    );
};
