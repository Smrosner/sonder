import React from 'react';

const JournalEntry = ({ entry }) => {
  console.log('entry', entry.createdAt)
  const date = entry.createdAt
  const newDate = new Date(date)
  return (
    <>
      <h5>{`Feeling ${entry.mood}`}</h5>
      {/* <h4>{entry.}</h4> */}
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
    </>
  )
}

export default JournalEntry;