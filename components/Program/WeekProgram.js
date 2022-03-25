import React from 'react';
import CallCard from './CallCard';
import styles from './WeekProgram.module.css';

const WeekProgram = ({ weeklyProgram }) => {
  console.log(weeklyProgram);
  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>{weeklyProgram.name}</h2>
        <h5>{weeklyProgram.title}</h5>
        <p>{weeklyProgram.dates}</p>
      </div>
      <div>
        {weeklyProgram.calls.map((call, i) => (
          <CallCard key={i} call={call} />
        ))}
      </div>
    </div>
  );
};

export default WeekProgram;
