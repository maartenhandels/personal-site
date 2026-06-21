import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current Tiqets role', () => {
  render(<App />);
  expect(screen.getAllByText(/Backend Engineer/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Tiqets\.com - Expedia Group B2B/i)).toBeInTheDocument();
});
