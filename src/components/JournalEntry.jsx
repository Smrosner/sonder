import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <>
      <h5>{`Feeling ${entry.mood}`}</h5>
      <h4>{entry.title}</h4>
      <p>{entry.body}</p>
    </>
  )
}

export default JournalEntry;