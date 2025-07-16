import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import { fetchBugs, createBug, updateBug, deleteBug } from './api/bugApi';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadBugs = async () => {
    setLoading(true);
    try {
      const res = await fetchBugs();
      setBugs(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to load bugs');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadBugs();
  }, []);

  const handleCreate = async (bug) => {
    try {
      await createBug(bug);
      loadBugs();
    } catch {
      setError('Failed to create bug');
    }
  };

  const handleUpdate = async (id, bug) => {
    try {
      await updateBug(id, bug);
      loadBugs();
    } catch {
      setError('Failed to update bug');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBug(id);
      loadBugs();
    } catch {
      setError('Failed to delete bug');
    }
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Bug Tracker</h1>
        {error && <p className="error-message">{error}</p>}
        <BugForm onSubmit={handleCreate} />
        {loading ? <p className="loading-message">Loading...</p> : <BugList bugs={bugs} onUpdate={handleUpdate} onDelete={handleDelete} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
