import { useAppContext } from 'context/useAppContext';
import { Searchbar } from 'components/ui/searchbar/Searchbar';
import React, { useCallback, useEffect, useState } from 'react';

export const Search: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Search bar handler
    const handleSearchbarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    // Update app state
    useEffect(() => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, title: searchTerm } });
    }, [searchTerm]);

    return (
        <>
            <Searchbar value={searchTerm} onChange={handleSearchbarChange}></Searchbar>
        </>
    );
};
