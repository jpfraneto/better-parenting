import React from 'react';
import styles from './CallCard.module.css';

const CallCard = ({ call }) => {
  return (
    <div className={styles.container}>
      <div className={styles.callNumberContainer}>
        <p>{call.callNumber}</p>
      </div>
      <div>
        <p>{call.details}</p>
        <p>
          <strong>{call.ponent}</strong>
        </p>
      </div>
    </div>
  );
};

export default CallCard;
