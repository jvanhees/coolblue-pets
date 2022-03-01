import React from 'react';
import { render, screen } from '@testing-library/react';
import { PetSpecs } from './PetSpecs';

import { PetMock } from 'mocks/PetMock';

test('renders the pet specs', () => {
    render(<PetSpecs pet={PetMock[0]} />);

    const typeText = screen.getByText('Cat');
    const ageText = screen.getByText('10 years');
    const dateText = screen.getByText('19 juli 2021');
    const categoryText = screen.getByText('Small pet');

    expect(ageText).toBeInTheDocument();
    expect(typeText).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();
    expect(categoryText).toBeInTheDocument();
});
