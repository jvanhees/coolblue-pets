import { Pet, PetResponseAttributes } from 'interfaces/Pets';

export const mapPet = (pet: PetResponseAttributes): Pet => {
    const [day, month, year] = pet.dateAdded.split('-');
    return {
        ...pet,
        title: pet.name,
        available: pet.available === 'Yes' ? true : false,
        dateAdded: new Date(parseInt(year), parseInt(month), parseInt(day)),
    };
};
