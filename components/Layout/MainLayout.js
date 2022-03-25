import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};

export default MainLayout;
