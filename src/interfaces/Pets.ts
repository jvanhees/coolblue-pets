export interface PetResponse {
    pets: PetResponseAttributes[];
}

export interface PetResponseAttributes {
    id: number;
    name: string;
    species: string;
    available: string;
    birthYear: number;
    dateAdded: string;
    photo: string;
}

export interface Pet {
    id: number;
    title: string;
    species: string;
    available: boolean;
    birthYear: number;
    dateAdded: Date;
    photo: string;
}
