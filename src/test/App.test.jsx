import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App.jsx';
import '@testing-library/jest-dom/vitest';

test('renders Sports Shop title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Sports Shop/i);
  expect(titleElement).toBeInTheDocument();
});

