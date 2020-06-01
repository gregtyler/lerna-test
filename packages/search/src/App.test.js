import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search invitation', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search for a Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
