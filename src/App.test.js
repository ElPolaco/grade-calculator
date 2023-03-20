import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grade calculator headline', () => {
  render(<App />);
  const hElement = screen.getByText(/grade calculator/i);
  expect(hElement).toBeInTheDocument();
});
