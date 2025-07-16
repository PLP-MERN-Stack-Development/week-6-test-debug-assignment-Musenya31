import React, { useState } from 'react';

const statusClass = (status) => {
  if (status === 'open') return 'status-badge status-open';
  if (status === 'in-progress') return 'status-badge status-in-progress';
  if (status === 'resolved') return 'status-badge status-resolved';
  return 'status-badge';
};

const BugItem = ({ bug, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(bug.status);

  const handleUpdate = () => {
    onUpdate(bug._id, { ...bug, status });
    setEditing(false);
  };

  return (
    <div className="BugItem">
      <h3>{bug.title}
        <span className={statusClass(bug.status)}>{bug.status.replace('-', ' ')}</span>
      </h3>
      <p>{bug.description}</p>
      <div className="actions">
        <button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit Status'}</button>
        {editing && (
          <>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <button onClick={handleUpdate}>Save</button>
          </>
        )}
        <button onClick={() => onDelete(bug._id)}>Delete</button>
      </div>
    </div>
  );
};

export default BugItem; 