import { screen, render, fireEvent } from '@testing-library/react';
import { Dashboard } from './dashboard';

beforeEach(() => render(<Dashboard />));

describe('DashboardPage', () => {
    it('Must display a title page', () => {
        expect(screen.queryByText(/Dashboard/i)).toBeInTheDocument();
    })
})