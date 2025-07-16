import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('calls onSubmit with form data', () => {
  const handleSubmit = jest.fn();
  render(<BugForm onSubmit={handleSubmit} />);
  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: 'Bug' } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: 'desc' } });
  fireEvent.click(screen.getByText(/report bug/i));
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Bug', description: 'desc', status: 'open' });
}); 