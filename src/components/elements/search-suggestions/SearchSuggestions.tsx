import styled from 'styled-components';
import { usePetsSearch } from 'hooks/usePetsSearch';
import React, { useEffect } from 'react';

const SuggestionContainer = styled.div`
    margin-top: 1em;
    padding-top: 0.5em;
    border-top: 1px solid ${props => props.theme.palette.shades.medium};
`;

const Suggestion = styled.button`
    display: block;
    padding: 0.5em 0;
    background: none;
    border: none;
`;

type SearchSuggestionsProps = {
    input: string;
    onSuggestionSelect: (suggestion: string) => void;
};

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ input, onSuggestionSelect }) => {
    const [{ results, loading }, setCriteria] = usePetsSearch();

    // Update search based on app state
    useEffect(() => {
        if (input.length > 2) {
            setCriteria({ title: input });
        }
    }, [input]);

    if (loading || input.length <= 2 || results.length === 0) return <></>;

    // TODO: Split this into a separate view component
    return (
        <SuggestionContainer>
            {results.map((pet, index) => (
                <Suggestion key={index} onClick={() => onSuggestionSelect(pet.title)}>
                    {pet.title}
                </Suggestion>
            ))}
        </SuggestionContainer>
    );
};
