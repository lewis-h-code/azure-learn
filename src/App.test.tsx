import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders p element', () => {
  render(<App />);
  const pElement = screen.getByText(/Hello container/i);
  expect(pElement).toBeInTheDocument();
});
