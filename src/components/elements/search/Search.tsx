import { useAppContext } from 'context/useAppContext';
import { Searchbar } from 'components/ui/searchbar/Searchbar';
import React, { useCallback, useEffect, useState } from 'react';
import { SearchSuggestions } from '../search-suggestions/SearchSuggestions';
import { useDebounce } from 'hooks/useDebounce';
import { usePetsSearch } from 'hooks/usePetsSearch';

export const Search: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [searchTerm, setSearchTerm] = useState<string>(state.searchCriteria.title || '');
    // Suggestions
    const [{ results: suggestions, loading }, setCriteria] = usePetsSearch();

    // Update results after 500ms
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Search bar handler
    const handleSearchbarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleSuggestionSelect = useCallback((suggestion: string) => {
        setSearchTerm(suggestion);
    }, []);

    // Update search for suggestions
    useEffect(() => {
        setCriteria({ title: searchTerm });
    }, [searchTerm]);

    // Update app state to start app search
    useEffect(() => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, title: debouncedSearchTerm } });
    }, [debouncedSearchTerm]);

    return (
        <>
            <Searchbar
                value={searchTerm}
                onChange={handleSearchbarChange}
                expanded={searchTerm.length > 0 && !loading && suggestions.length > 1}
            >
                <SearchSuggestions
                    input={searchTerm}
                    onSuggestionSelect={handleSuggestionSelect}
                    suggestions={suggestions}
                />
            </Searchbar>
        </>
    );
};
