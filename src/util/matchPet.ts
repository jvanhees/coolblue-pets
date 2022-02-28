import { Pet } from 'interfaces/Pets';

export type PetCriteria = {
    title?: string;
    species?: string;
    available?: boolean;
};

/**
 * Matches the pet based on the supplied criteria
 * @param pet The pet to check for a match
 * @param matcher The match criteria
 */
export const matchPet = (pet: Pet, criteria: PetCriteria): boolean => {
    return (
        (criteria.title === undefined || pet.title.toLowerCase().indexOf(criteria.title.toLowerCase()) > -1) &&
        (criteria.species === undefined || pet.species == criteria.species) &&
        (criteria.available === undefined || pet.available == criteria.available)
    );
};
