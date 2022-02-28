import { useAppContext } from 'context/useAppContext';
import { Dropdown } from 'components/ui/dropdown/Dropdown';
import { Searchbar } from 'components/ui/searchbar/Searchbar';
import React, { useCallback, useEffect, useState } from 'react';

export const Search: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Search bar handler
    const handleSearchbarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleSpeciesChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, species: e.target.value } });
    }, []);

    const handleAvailableChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, available: e.target.value } });
    }, []);

    // Update app state
    useEffect(() => {
        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: { ...state.searchCriteria, title: searchTerm } });
    }, [searchTerm]);

    const availableValue = state.searchCriteria.available === true ? 'Yes' : 'No';

    return (
        <>
            <Searchbar value={searchTerm} onChange={handleSearchbarChange}></Searchbar>
            <Dropdown value={state.searchCriteria.species} onChange={handleSpeciesChange}>
                <option>Species</option>
                <option>Dog</option>
                <option>Cat</option>
            </Dropdown>
            <Dropdown value={availableValue} onChange={handleAvailableChange}>
                <option>Available</option>
                <option>No</option>
                <option>Yes</option>
            </Dropdown>
        </>
    );
};
