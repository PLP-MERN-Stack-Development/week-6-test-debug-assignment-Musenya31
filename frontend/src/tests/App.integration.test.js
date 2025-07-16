import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import * as bugApi from '../api/bugApi';

jest.mock('../api/bugApi');

test('shows loading and then bug list', async () => {
  bugApi.fetchBugs.mockResolvedValue({ data: [
    { _id: '1', title: 'Bug1', description: 'desc', status: 'open' }
  ] });
  render(<App />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Bug1')).toBeInTheDocument());
});

test('shows error on fetch failure', async () => {
  bugApi.fetchBugs.mockRejectedValue(new Error('fail'));
  render(<App />);
  await waitFor(() => expect(screen.getByText(/failed to load bugs/i)).toBeInTheDocument());
}); 