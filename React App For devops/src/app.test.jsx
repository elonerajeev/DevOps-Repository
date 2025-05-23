import { render, fireEvent, screen } from '@testing-library/preact';
import { expect, test, describe } from 'vitest';
import { App } from './app'; // Adjust path as necessary

describe('App component', () => {
  test('renders initial count and increments correctly', () => {
    render(<App />);

    // Initial count should be 0
    expect(screen.getByText('count is 0')).toBeInTheDocument();

    // Find the increment button
    const incrementButton = screen.getByText(/count is \d+/);

    // Click increment button three times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Assert count is 3
    expect(screen.getByText('count is 3')).toBeInTheDocument();
  });

  test('resets the count correctly', () => {
    render(<App />);

    // Find the increment button and click it a few times
    const incrementButton = screen.getByText(/count is \d+/);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Assert count is 2 (or whatever it became)
    expect(screen.getByText('count is 2')).toBeInTheDocument();

    // Find the reset button
    const resetButton = screen.getByText('Reset');

    // Click reset button
    fireEvent.click(resetButton);

    // Assert count is 0
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  test('increment and reset buttons are present', () => {
    render(<App />);
    expect(screen.getByText(/count is \d+/)).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });
});
