import { Pet } from 'interfaces/Pets';
import { useEffect, useState } from 'react';
import { usePetsApi } from './usePets';

/**
 * Hook to get a single pet by ID (unfortunately not with a specific endpoint)
 */
export const usePet = (): [{ result: Pet | undefined; loading: boolean }, (id: number) => void] => {
    const [{ data, loading }] = usePetsApi();
    const [id, setId] = useState<number>();
    const [result, setResult] = useState<Pet | undefined>();

    useEffect(() => {
        // No point in searching an empty array
        if (data.length == 0) return;
        // TODO: Abstract this filter to a separate file + unit tests
        const filtered = data.filter(pet => pet.id == id);
        if (filtered.length >= 1) {
            setResult(filtered[0]);
        } else {
            console.error(`${filtered.length} pets found with id ${id}`);
        }
    }, [id, data]);

    return [{ result, loading }, setId];
};
