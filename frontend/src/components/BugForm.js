import React, { useState } from 'react';

const BugForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('open');
  };

  return (
    <form className="BugForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bug title (e.g. Login not working)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Describe the bug in detail..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={3}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm; 