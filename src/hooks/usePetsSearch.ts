import { Pet } from 'interfaces/Pets';
import { useEffect, useState } from 'react';
import { matchPet, PetCriteria } from 'util/matchPet';
import { usePetsApi } from './usePets';

/**
 * Hook for pet search based on criteria
 */
export const usePetsSearch = (): [{ results: Pet[]; loading: boolean }, (criteria: PetCriteria) => void] => {
    const [{ data, loading }] = usePetsApi();
    const [criteria, setCriteria] = useState<PetCriteria>();
    const [results, setResults] = useState<Pet[]>([]);

    useEffect(() => {
        setResults(
            data.reduce((acc: Pet[], pet) => {
                if (criteria && matchPet(pet, criteria)) acc.push(pet);
                return acc;
            }, [])
        );
    }, [criteria, data]);

    return [{ results, loading }, setCriteria];
};
