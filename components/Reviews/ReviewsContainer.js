import React from 'react';
import styles from './ReviewsContainer.module.css';
import { reviews } from './reviews';
import ReviewCard from './ReviewCard';

const ReviewsContainer = () => {
  return (
    <div className={styles.container}>
      {reviews.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
};

export default ReviewsContainer;
