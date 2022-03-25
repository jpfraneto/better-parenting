import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ReviewsContainer from '../components/Reviews/ReviewsContainer';

export default function Home() {
  return (
    <div>
      <section className={styles.landingContainer}>
        <div className={styles.landingTextContainer}>
          <h2>Parenting is hard...</h2>
          <h2>And no one told us how to do it.</h2>
          <h2>
            Why figure it out alone, if you can leverage the collective power of
            those who are going through the same process, all over the world?
          </h2>
          <Link href='/register'>
            <div className={styles.registerBtnContainer}>
              <div className={styles.takeActionBtn}>
                <h2>Register</h2>
                <h6>66 of 88 spots available</h6>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <div className={styles.feature}>
          <h2>4 week cohort</h2>
          <hr />
          <h4>Meet the power of community.</h4>
        </div>
        <div className={styles.feature}>
          <h2>3 weekly prompts</h2>
          <hr />
          <h4>Challenge yourselves answering the hard questions</h4>
          <p>How does your partner feel?</p>
        </div>

        <div className={styles.feature}>
          <h2>Live Q&A With Experts</h2>
          <hr />
          <h4>Learn from lead researchers and practitioners</h4>
        </div>
      </section>
      <section className={styles.emotionalLaborSection}>
        <div className={styles.textContainer}>
          {' '}
          <h2>Seek out emotional labor.</h2>
          <h4>Your children will grow with the consequences of your work.</h4>
        </div>
      </section>
      <section className={styles.reviewsSection}>
        <ReviewsContainer />
      </section>
      <footer className={styles.footerContainer}>
        <h4>
          This project is created every day with the hope that a better future
          is built with every interaction that we have with our children.
        </h4>
        <h4>
          It is built with the trust that we can collectively find the answers.
        </h4>
        <h4>
          I think there is a new way of doing things, and we will discover it
          together.
        </h4>
        <p>
          Any questions or feedback, please write to me at jpfraneto@gmail.com
        </p>
      </footer>
    </div>
  );
}
