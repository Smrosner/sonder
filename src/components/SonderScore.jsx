import React from 'react';

const SonderScore = ({ entries }) => {

  const moodMap = {}

  for (const entry of entries) {
    if (moodMap[entry.mood]) {
      moodMap[entry.mood]++
    } else {
      moodMap[entry.mood] = 1
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItem:"center"}}>
    <h2>Sonder Score - Rad: {moodMap.rad} Good: {moodMap.good} Meh: {moodMap.meh} Bad:  {moodMap.bad} Awful {moodMap.awful}</h2>
    </div>
  )

}

export default SonderScore;