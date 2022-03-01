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

    // Update search based on app state
    useEffect(() => {
        if (searchTerm.length > 2) {
            setCriteria({ title: searchTerm });
        }
    }, [searchTerm]);

    // Update app state
    useEffect(() => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, title: debouncedSearchTerm } });
    }, [debouncedSearchTerm]);

    return (
        <>
            <Searchbar
                value={searchTerm}
                onChange={handleSearchbarChange}
                expanded={searchTerm.length > 2 && !loading && suggestions.length > 0}
            >
                <SearchSuggestions onSuggestionSelect={handleSuggestionSelect} suggestions={suggestions} />
            </Searchbar>
        </>
    );
};
