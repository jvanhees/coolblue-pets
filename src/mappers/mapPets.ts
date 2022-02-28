import { Pet, PetResponseAttributes } from 'interfaces/Pets';

export const mapPet = (pet: PetResponseAttributes): Pet => {
    return {
        ...pet,
        title: pet.name,
        available: pet.available === 'Yes' ? true : false,
        dateAdded: new Date(pet.dateAdded),
    };
};
