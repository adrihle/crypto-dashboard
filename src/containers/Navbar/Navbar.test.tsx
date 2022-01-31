import { screen, render } from "@testing-library/react";
import { Navbar } from './Navbar';

beforeEach(() => render(<Navbar />));

describe('Navbar', () => {
    it('Must display container title', () => {
        expect(screen.queryByText(/Navbar/i)).toBeInTheDocument();
    })
})