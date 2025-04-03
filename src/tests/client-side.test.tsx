import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClientSidePage from '@/app/client-side/page';

// Mock the fetch API
global.fetch = jest.fn();

describe('Search Functionality', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should update the search query state when input changes', () => {
        render(<ClientSidePage />);

        const searchInput = screen.getByTestId('search-input');

        fireEvent.change(searchInput, { target: { value: 'query' } });

        expect(searchInput).toHaveValue('query');
    });

    it('should display search results based on the query', async () => {
        // Mock a successful fetch response
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ users: [{ username: 'john_doe' }] }),
        });

        render(<ClientSidePage />);

        const searchInput = screen.getByTestId('search-input');

        fireEvent.change(searchInput, { target: { value: 'john' } });

        fireEvent.click(screen.getByTestId('search-button'));

        // Wait for the search results to appear
        await waitFor(() => {
            expect(screen.getByText(/john_doe/i)).toBeInTheDocument();
        });
    });
});