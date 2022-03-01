import { useAppContext } from 'context/useAppContext';
import { Carousel } from 'components/ui/carousel/Carousel';
import { PetCard } from 'components/ui/pet-card/PetCard';
import { usePetsSearch } from 'hooks/usePetsSearch';
import React, { useEffect, useState } from 'react';
import { Pet } from 'interfaces/Pets';

export const SearchResults: React.FC = () => {
    const { state } = useAppContext();
    const [{ results, loading }, setCriteria] = usePetsSearch();
    const [pets, setPets] = useState<Pet[]>([]);

    // Update search based on app state
    useEffect(() => {
        setCriteria(state.searchCriteria);
    }, [state.searchCriteria]);

    // Limit to 3 since the images are massive and lags my browser...
    // TODO: Might optimize this if this component renders too muich
    useEffect(() => {
        results.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1));
        results.splice(0, results.length - 3);
        setPets(results);
    }, [results]);

    // TODO: Make a better loader
    if (loading) return <p>loading...</p>;

    // TODO: Split this into a separate view component
    return (
        <Carousel columns={3} items={pets.length}>
            {pets.map(pet => {
                return <PetCard key={pet.id} pet={pet}></PetCard>;
            })}
        </Carousel>
    );
};
