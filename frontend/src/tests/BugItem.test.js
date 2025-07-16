import { render, screen, fireEvent } from '@testing-library/react';
import BugItem from '../components/BugItem';

test('renders bug and allows status edit', () => {
  const bug = { _id: '1', title: 'Bug1', description: 'desc', status: 'open' };
  const onUpdate = jest.fn();
  render(<BugItem bug={bug} onUpdate={onUpdate} onDelete={() => {}} />);
  fireEvent.click(screen.getByText(/edit status/i));
  fireEvent.change(screen.getByDisplayValue('open'), { target: { value: 'resolved' } });
  fireEvent.click(screen.getByText(/save/i));
  expect(onUpdate).toHaveBeenCalledWith('1', { ...bug, status: 'resolved' });
});

test('calls onDelete when delete button clicked', () => {
  const bug = { _id: '1', title: 'Bug1', description: 'desc', status: 'open' };
  const onDelete = jest.fn();
  render(<BugItem bug={bug} onUpdate={() => {}} onDelete={onDelete} />);
  fireEvent.click(screen.getByText(/delete/i));
  expect(onDelete).toHaveBeenCalledWith('1');
}); 