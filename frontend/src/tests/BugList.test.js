import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

test('shows message when no bugs', () => {
  render(<BugList bugs={[]} onUpdate={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/no bugs reported/i)).toBeInTheDocument();
});

test('renders bug items', () => {
  const bugs = [
    { _id: '1', title: 'Bug1', description: 'desc1', status: 'open' },
    { _id: '2', title: 'Bug2', description: 'desc2', status: 'resolved' }
  ];
  render(<BugList bugs={bugs} onUpdate={() => {}} onDelete={() => {}} />);
  expect(screen.getByText('Bug1')).toBeInTheDocument();
  expect(screen.getByText('Bug2')).toBeInTheDocument();
}); 