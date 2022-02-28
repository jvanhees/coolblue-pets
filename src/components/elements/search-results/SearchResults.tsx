import { useAppContext } from 'context/useAppContext';
import { Carousel } from 'components/ui/carousel/Carousel';
import { PetCard } from 'components/ui/pet-card/PetCard';
import { usePetsSearch } from 'hooks/usePetsSearch';
import { Pet } from 'interfaces/Pets';
import React, { useEffect } from 'react';

export const SearchResults: React.FC = () => {
    const { state } = useAppContext();
    const [{ results, loading }, setCriteria] = usePetsSearch();

    // Update search based on app state
    useEffect(() => {
        console.log('new state');
        setCriteria(state.searchCriteria);
    }, [state]);

    // Limit to 3 since the images are massive and lags my browser...
    results.splice(0, results.length - 5);

    return (
        <Carousel columns={3} items={results.length}>
            {results.map(pet => {
                return <PetCard key={pet.id} pet={pet}></PetCard>;
            })}
        </Carousel>
    );
};
