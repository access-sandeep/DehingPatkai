import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Landing Page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Landing Page/i);
  expect(linkElement).toBeInTheDocument();
});
