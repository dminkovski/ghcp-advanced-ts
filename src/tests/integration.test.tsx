import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntegrationPage from './page';

describe('IntegrationPage', () => {
    it('should reverse the input text when the button is clicked', () => {
        render(<IntegrationPage />);

        // Arrange: Find input and button elements using IDs
        const inputElement = screen.getByTestId('reverse-input');
        const buttonElement = screen.getByTestId('reverse-button');

        // Act: Simulate user input and button click
        fireEvent.change(inputElement, { target: { value: 'Knauf' } });
        fireEvent.click(buttonElement);

        // Assert: Check if the reversed message is displayed
        expect(screen.queryByText(/fuanK/i)).toBeInTheDocument();
    });
});