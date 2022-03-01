import { Dropdown } from 'components/ui/dropdown/Dropdown';
import { useAppContext } from 'context/useAppContext';
import React, { useCallback, useEffect, useState } from 'react';

// TODO: Improve "none" selection handling
type AvailableOptions = 'Available' | 'No' | 'Yes';
type SpeciesOptions = 'Species' | 'Dog' | 'Cat';

export const SearchFilters: React.FC = () => {
    const { state, dispatch } = useAppContext();
    // TODO: Get default value from state
    const [available, setAvailable] = useState<AvailableOptions>('Available');
    const [species, setSpecies] = useState<SpeciesOptions>('Species');

    const handleSpeciesChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSpecies(e.target.value as SpeciesOptions);
    }, []);

    const handleAvailableChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setAvailable(e.target.value as AvailableOptions);
    }, []);

    useEffect(() => {
        // Hmm..
        const newSearchCriteria = state.searchCriteria;

        if (available !== 'Available') {
            newSearchCriteria.available = available === 'Yes' ? true : false;
        } else {
            delete newSearchCriteria.available;
        }

        if (species !== 'Species') {
            newSearchCriteria.species = species;
        } else {
            delete newSearchCriteria.species;
        }

        dispatch({ type: 'SET_SEARCH_CRITERIA', payload: newSearchCriteria });
    }, [available, species]);

    return (
        <>
            <Dropdown value={species} onChange={handleSpeciesChange}>
                <option>Species</option>
                <option>Dog</option>
                <option>Cat</option>
            </Dropdown>
            <Dropdown value={available} onChange={handleAvailableChange}>
                <option>Available</option>
                <option>No</option>
                <option>Yes</option>
            </Dropdown>
        </>
    );
};
