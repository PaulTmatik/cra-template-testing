import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Hello world', () => {
  render(<App />);
  const startElement = screen.getByText(/Hello world/i);
  expect(startElement).toBeInTheDocument();
});
