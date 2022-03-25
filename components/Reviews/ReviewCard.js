import React from 'react';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.reviewCardContainer}>
      <p className={styles.reviewText}>{review.text}</p>
      <h6 className={styles.reviewAuthor}>{review.author}</h6>
    </div>
  );
};

export default ReviewCard;
