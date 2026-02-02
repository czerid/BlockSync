// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockSync/i);
    expect(titleElement).toBeInTheDocument();
});
