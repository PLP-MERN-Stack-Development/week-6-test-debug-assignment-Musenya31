import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, onUpdate, onDelete }) => {
  if (!bugs.length) return <p className="error-message">No bugs reported.</p>;
  return (
    <div className="BugList">
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BugList; 