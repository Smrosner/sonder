import React from 'react';
import JournalEntry from './JournalEntry.jsx'

const JournalList = ({ entries }) => {
  const ordered = entries.reverse();
  return (
    <div className="entries">
      {ordered.map((entry, index) => {
        return (
          <div className="entry" key={`div ${index}`}>
              <JournalEntry entry={entry} key={`entry ${index}`}
              />
          </div>
        )
      })}
    </div>
  );
};

export default JournalList;