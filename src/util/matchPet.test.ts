import { Pet } from 'interfaces/Pets';
import { matchPet } from './matchPet';

const pet: Pet = {
    id: 1,
    title: 'Daamin',
    species: 'Cat',
    available: false,
    birthYear: 2012,
    dateAdded: new Date(19, 6, 2021),
    photo: 'https://imgur.com/wpfirW7.jpg',
};

describe('matchPet', () => {
    it('should match based on partial title', () => {
        expect(matchPet(pet, { title: 'Daam' })).toBeTruthy();
        expect(matchPet(pet, { title: 'daam' })).toBeTruthy();
        expect(matchPet(pet, { title: 'Daamin' })).toBeTruthy();
        expect(matchPet(pet, { title: 'D' })).toBeTruthy();
        expect(matchPet(pet, { title: 'Daamintest' })).toBeFalsy();
        expect(matchPet(pet, { title: 'Nope' })).toBeFalsy();
    });

    it('should match based on availability', () => {
        expect(matchPet(pet, { available: false })).toBeTruthy();
        expect(matchPet(pet, { available: true })).toBeFalsy();
    });

    it('should match based on species', () => {
        expect(matchPet(pet, { species: 'Cat' })).toBeTruthy();
        expect(matchPet(pet, { species: 'Dog' })).toBeFalsy();
    });

    it('should match based on multiple criteria', () => {
        expect(matchPet(pet, { species: 'Cat', available: false })).toBeTruthy();
        expect(matchPet(pet, { species: 'Cat', available: true })).toBeFalsy();
        expect(matchPet(pet, { species: 'Dog', available: false })).toBeFalsy();
        expect(matchPet(pet, { species: 'Dog', available: true })).toBeFalsy();
    });
});
