import React from 'react';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const AboutPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);
  return (
    <div>
      <h1>About</h1>
      <div className={styles.aboutTextContainer}>
        <p>My name is JP, and 5 months ago my first daughter Mila was born.</p>
        <p>
          No one taught me how to be a father, nor do I have a role model on
          which to lean on. My father worked his ass off all his life in order
          to provide me with the material well-being and education that I have
          enjoyed all my life, but in terms of showing me the path, I
          haven`&apos;`t felt his company. I can`&apos;`t lean on him, because
          he doesn`&apos;`t know also.
        </p>
        <p>
          The way that modern men want to be fathers has not been discovered
          yet, and this space is an answer to that.
        </p>
        <p>
          It is for us to build together the body of knowledge that will make
          our partners and children happy.
        </p>
        <p>
          It is for us to understand together what do our families need from us,
          and how to deliver that.
        </p>
        <p>
          It is for us to connect with each other, and share. Share how we feel,
          something that worked, something that didn`&apos;`t work, whatever.
        </p>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            <div className='embla__slide'>
              {' '}
              <Image
                alt='family'
                src='/images/familia.jpeg'
                width={500}
                height={330}
              />
            </div>
            <div className='embla__slide'>
              {' '}
              <Image
                alt='family2'
                src='/images/familia2.jpeg'
                width={500}
                height={330}
              />
            </div>
            <div className='embla__slide'>
              {' '}
              <Image
                alt='family3'
                src='/images/jpultima.jpeg'
                width={500}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
