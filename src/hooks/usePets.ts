import { PetResponse, Pet } from 'interfaces/Pets';
import { mapPet } from 'mappers/mapPets';
import { useEffect, useState } from 'react';

export const usePetsApi = () => {
    const [data, setData] = useState<Pet[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // TODO: Move to .env file
                const response = await fetch('https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1/pets');
                const data = (await response.json()) as PetResponse;
                setData(data.pets.map(mapPet));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return [{ data, loading }];
};
