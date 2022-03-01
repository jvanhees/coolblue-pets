import { mapPet } from './mapPets';

const petAttributes = {
    id: 1,
    name: 'Daamin',
    species: 'Cat',
    available: 'No',
    birthYear: 2012,
    dateAdded: '19-06-2021',
    photo: 'https://imgur.com/wpfirW7.jpg',
};

describe('mapPet', () => {
    it('should map pet', () => {
        const result = mapPet(petAttributes);
        expect(result.title).toBe('Daamin');
        expect(result.available).toBe(false);
        expect(result.dateAdded).toStrictEqual(new Date(2021, 5, 19));
    });
});
