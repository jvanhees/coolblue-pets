import { Pet } from 'interfaces/Pets';

export const PetMock: Pet[] = [
    {
        id: 1,
        title: 'Daamin',
        species: 'Cat',
        available: false,
        birthYear: 2012,
        dateAdded: new Date(2021, 6, 19),
        photo: 'https://imgur.com/wpfirW7.jpg',
    },
    {
        id: 2,
        title: 'Dann',
        species: 'Dog',
        available: true,
        birthYear: 2016,
        dateAdded: new Date(2022, 1, 1),
        photo: 'https://imgur.com/ES0AHRx.jpg',
    },
    {
        id: 3,
        title: 'Annemie',
        species: 'Dog',
        available: true,
        birthYear: 2008,
        dateAdded: new Date(2011, 4, 25),
        photo: 'https://imgur.com/cL9Su9q.jpg',
    },
];
