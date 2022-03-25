import React from 'react';
import WeekProgram from './WeekProgram';
import styles from './ProgramPageLayout.module.css';

const weeklyProgram = {
  name: 'Week 1',
  title: 'Connecting with what it means to be a father',
  dates: '21 to 28 March 2022',
  calls: [
    {
      callNumber: 1,
      details: 'Lorem ipsum bla aloja compare',
      ponent: 'Michel Odent',
    },
    {
      callNumber: 2,
      details: 'Lorem ipsum bla aloja compare',
      ponent: 'Javiera Mena',
    },
    {
      callNumber: 3,
      details: 'Lorem ipsum bla aloja compare',
      ponent: 'Federico Jimenez',
    },
  ],
};

const ProgramPageLayout = () => {
  return (
    <div className={styles.programsContainer}>
      <WeekProgram weeklyProgram={weeklyProgram} />
      <WeekProgram weeklyProgram={weeklyProgram} />
      <WeekProgram weeklyProgram={weeklyProgram} />
      <WeekProgram weeklyProgram={weeklyProgram} />
    </div>
  );
};

export default ProgramPageLayout;
