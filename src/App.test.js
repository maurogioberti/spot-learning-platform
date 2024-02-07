import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to our online courses/i);
  expect(element).toBeInTheDocument();
});
